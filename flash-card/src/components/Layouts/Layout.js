import React from "react";
import Navigation from "../Navigation/Navigation";
import "./style.css";

const FlashCard = ({ children, setContinentId }) => {
  return (
    <React.Fragment>
      <Navigation setContinentId={setContinentId} />
      <div className="layout">
        <div className="layout__main__body">{children}</div>
      </div>
    </React.Fragment>
  );
};
export default FlashCard;
