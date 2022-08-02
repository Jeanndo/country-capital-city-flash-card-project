import React from "react";
import Navigation from "../Navigation/Navigation";
import "./style.css";

const FlashCard = ({ children, id }) => {
  console.log(id);
  return (
    <React.Fragment>
      <Navigation />
      <div className="layout">
        <div className="layout__main__body">{children}</div>
      </div>
    </React.Fragment>
  );
};
export default FlashCard;
