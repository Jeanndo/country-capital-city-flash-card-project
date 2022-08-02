import React from "react";
import "./layout.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="layout__container">
        <div className="layout__container_sidebar">
          <Link to="/continents">
            <button>CONTINENTS</button>
          </Link>
          <Link to="/countries">
            <button>COUNTRIES</button>
          </Link>
        </div>
        <div className="layout__container__main_body">{children}</div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
