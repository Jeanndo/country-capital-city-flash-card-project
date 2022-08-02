import React from "react";
import Layout from "../Layouts/DashboardLayout/Layout";

import "./Country.css";

const Country = () => {
  return (
    <Layout>
      <div className="continent">
        <div className="create__continent">
          <input type="text" placeholder="Enter Country" />
          <button className="createBtn">Create</button>
        </div>
        <div className="continent_cards">
          <div className="continent_card">
            <h1>Rwanda</h1>
            <button className="EditButton"> Edit</button>
          </div>
          <div className="continent_card">
            <h1>Burundi</h1>
            <button className="EditButton"> Edit</button>
          </div>
          <div className="continent_card">
            <h1>Kenya</h1>
            <button className="EditButton"> Edit</button>
          </div>
          <div className="continent_card">
            <h1>DRC</h1>
            <button className="EditButton"> Edit</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Country;
