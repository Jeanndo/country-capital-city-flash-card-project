import React, { useState } from "react";
import Layout from "../Layouts/DashboardLayout/Layout";
import { useQuery, useMutation, gql } from "@apollo/client";
import "./Country.css";

const GET__ALL__CONTINENTS = gql`
  query getAllContinents {
    continents {
      id
      continentName
      country {
        capitalCity
        countryName
      }
    }
  }
`;
const GET__ALL__COUNTRIES = gql`
  query getAllCountries {
    countries {
      id
      continentId
      capitalCity
      countryName
    }
  }
`;

const CREATE_COUNTRY_MUTATION = gql`
  mutation CreateCountry($createCountryInput2: CreateCountryInput!) {
    createCountry(input: $createCountryInput2) {
      id
      countryName
      capitalCity
      continentId
    }
  }
`;

const Country = () => {
  const {
    data,
    loading,
    error,
    refetch: continentFetch,
  } = useQuery(GET__ALL__CONTINENTS);
  const {
    data: countries,
    loading: countryLoading,
    error: errorCountry,
    refetch,
  } = useQuery(GET__ALL__COUNTRIES);
  const [formData, setFormData] = useState({
    countryName: "",
    capitalCity: "",
    continentId: "",
  });
  const [createCountry] = useMutation(CREATE_COUNTRY_MUTATION);

  const handelSubmit = () => {
    createCountry({
      variables: {
        createCountryInput2: {
          countryName: formData.countryName,
          capitalCity: formData.capitalCity,
          continentId: formData.continentId,
        },
      },
    });
    refetch();
  };

  console.log("countries", countries);
  return (
    <Layout>
      <div className="continent">
        <div className="create__continent">
          <div>
            <input
              type="text"
              placeholder="Enter Country Name"
              value={formData.countryName}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  countryName: event.target.value,
                })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Capital City"
              value={formData.capitalCity}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  capitalCity: event.target.value,
                })
              }
            />
          </div>
          <div>
            <select
              className="continents__selection"
              value={formData.continentId}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  continentId: event.target.value,
                })
              }
            >
              <option value={null}>--select Continent--</option>
              {data?.continents?.map((continent) => (
                <option value={continent?.id} key={continent?.id}>
                  {continent?.continentName}
                </option>
              ))}
            </select>
          </div>
          <button className="createCountry" onClick={handelSubmit}>
            Create
          </button>
        </div>
        <div className="continent_cards">
          {countries?.countries?.map((country) => (
            <div className="continent_card" key={country?.id}>
              <h1>{country?.countryName}</h1>
              <h1>{country?.capitalCity}</h1>
              <button className="EditButton"> Edit</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Country;
