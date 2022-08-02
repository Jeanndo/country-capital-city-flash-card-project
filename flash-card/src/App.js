import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlashCardList from "./components/FlashCardList/FlashCardList";
import Continent from "./components/Continent/Continent";
import Country from "./components/Country/Country";

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is capital city of Rwanda?",
    answer: "Kigali",
  },
  {
    id: 2,
    question: "What is capital city of Burundi?",
    answer: "Bujumbura",
  },
  {
    id: 3,
    question: "What is capital city of Uganda?",
    answer: "Campala",
  },
  {
    id: 4,
    question: "What is capital city of Uganda?",
    answer: "Campala",
  },
  {
    id: 5,
    question: "What is capital city of Kenya?",
    answer: "Nirobi",
  },
  {
    id: 6,
    question: "What is capital city of DRC?",
    answer: "KINSHASA",
  },
  {
    id: 7,
    question: "What is capital city of MISIRI?",
    answer: "CAIRO",
  },
];

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlashCardList flashcards={flashcards} />} />
        <Route path="/continents" element={<Continent />} />
        <Route path="/countries" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
