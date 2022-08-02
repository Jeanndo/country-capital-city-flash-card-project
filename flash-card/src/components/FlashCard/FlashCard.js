import React, { useRef } from "react";

const FlashCard = ({ flashcard }) => {
  const cardRef = useRef();

  const handleFlip = () => {
    console.log("flip", cardRef.current);
    cardRef.current.transform = "rotateY(180deg)";
  };

  return (
    <React.Fragment>
      <div className="flip-card" onClick={handleFlip}>
        <div className="flip-card-inner" ref={cardRef}>
          <div className="flip-card-front">
            <h4>{flashcard.question}</h4>
          </div>
          <div className="flip-card-back">
            <h1>Answer</h1>
            <h5>{flashcard.answer}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FlashCard;
