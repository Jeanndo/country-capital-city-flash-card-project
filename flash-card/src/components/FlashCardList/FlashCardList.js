import React, { useState, useEffect } from "react";
import FlashCard from "./../FlashCard/FlashCard";
import Layout from "../Layouts/Layout";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CONTINENT_BY_ID = gql`
  query getContinent($continentId: ID!) {
    continent(id: $continentId) {
      id
      continentName
      country {
        capitalCity
        countryName
        continentId
      }
    }
  }
`;

const FlashCardList = () => {
  const [continentId, setContinentId] = useState("");

  const [fetchContinent, { data: searchedContinents }] =
    useLazyQuery(GET_CONTINENT_BY_ID);

  const [indexNumber, setIndexNumber] = useState(1);

  useEffect(() => {
    if (continentId) {
      fetchContinent({
        variables: {
          continentId: continentId,
        },
      });
    }
  }, [continentId, fetchContinent]);

  const handleNext = () => {
    setIndexNumber((prev) => prev + 1);
  };
  const handlePrev = () => {
    setIndexNumber((prev) => prev - 1);
  };

  return (
    <Layout setContinentId={setContinentId}>
      <div className="card-grid container">
        {searchedContinents?.continent?.country
          ?.slice(indexNumber - 1, indexNumber)
          .map((country) => (
            <FlashCard key={country.countryName} flashcard={country} />
          ))}
      </div>
      <div>
        <div className="Actions">
          {indexNumber !== 1 && <button onClick={handlePrev}>Prev</button>}
          {indexNumber !==
            searchedContinents?.continent?.country.length - 1 && (
            <button onClick={handleNext}>NEXT</button>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default FlashCardList;
