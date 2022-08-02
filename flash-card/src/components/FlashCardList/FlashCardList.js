import React from "react";
import FlashCard from "./../FlashCard/FlashCard";
import Layout from "../Layouts/Layout";

const FlashCardList = ({ flashcards }) => {
  return (
    <Layout id={2}>
      <div className="card-grid container">
        {flashcards.map((flashcard) => (
          <FlashCard flashcard={flashcard} key={flashcard.id} />
        ))}
      </div>
    </Layout>
  );
};
export default FlashCardList;
