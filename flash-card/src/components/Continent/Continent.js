import React from "react";
import Layout from "../Layouts/DashboardLayout/Layout";

import "./Continent.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="continent">
        <div className="create__continent">
          <input type="text" placeholder="Enter Continent" />
          <button className="createBtn">Create</button>
        </div>
        <div className="continent_cards">
          <div className="continent_card">
            <h1>Europe</h1>
            <button className="EditButton"> Edit</button>
          </div>
          <div className="continent_card">
            <h1>Europe</h1>
            <button className="EditButton"> Edit</button>
          </div>
          <div className="continent_card">
            <h1>Europe</h1>
            <button className="EditButton"> Edit</button>
          </div>
          <div className="continent_card">
            <h1>Europe</h1>
            <button className="EditButton"> Edit</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
