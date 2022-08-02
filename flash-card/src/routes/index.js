import React from "react";
import { Routes, Route } from "react-router-dom";
import FlashCardList from "../components/FlashCardList/FlashCardList";

const FlashCardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FlashCardList />} />
    </Routes>
  );
};
export default FlashCardRoutes;
