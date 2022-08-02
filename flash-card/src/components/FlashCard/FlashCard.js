import React from "react";

const FlashCard = ({ flashcard, setIndexNumber }) => {
  return (
    <React.Fragment>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h4>What is the capital city of {flashcard?.countryName}</h4>
            <img
              src="https://cdn.pixabay.com/photo/2015/08/17/19/58/question-892904_1280.png"
              alt="question"
            />
          </div>
          <div className="flip-card-back">
            <h1>Answer</h1>
            <h5>{flashcard?.capitalCity}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FlashCard;
