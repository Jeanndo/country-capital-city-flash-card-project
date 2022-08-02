import React, { useState } from "react";
import Layout from "../Layouts/DashboardLayout/Layout";
import "./Continent.css";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET__ALL__CONTINENTS = gql`
  query getAllContinents {
    continents {
      id
      continentName
    }
  }
`;

const CREATE_CONTINENT_MUTATION = gql`
  mutation CreateContinent($createContinentInput2: CreateContinentInput!) {
    createContinent(input: $createContinentInput2) {
      id
      continentName
    }
  }
`;

const Dashboard = () => {
  const [continentName, setContinentName] = useState("");
  const { data, loading, error, refetch } = useQuery(GET__ALL__CONTINENTS);
  const [createContinent] = useMutation(CREATE_CONTINENT_MUTATION);

  const handleSubmit = () => {
    console.log("continent", continentName);
    createContinent({
      variables: {
        createContinentInput2: {
          continentName: continentName,
        },
      },
    });
    refetch();
  };
  return (
    <Layout>
      <div className="continent">
        <div className="create__continent">
          <input
            type="text"
            placeholder="Enter Continent"
            value={continentName}
            onChange={(event) => setContinentName(event.target.value)}
          />
          <button className="createBtn" onClick={handleSubmit}>
            Create
          </button>
        </div>
        <div className="continent_cards">
          {data?.continents?.map((continent) => (
            <div className="continent_card" key={continent?.id}>
              <h1>{continent?.continentName}</h1>
              <button className="EditButton"> Edit</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
