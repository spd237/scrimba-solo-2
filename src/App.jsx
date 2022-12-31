import React from "react";
import Header from "./Components/Header";
import Travel from "./Components/Travel";
import "./style.css";
import data from "./data.js";

function App() {
  const travelCards = data.map((card) => {
    return <Travel key={card.id} {...card} />;
  });
  return (
    <div className="container">
      <Header />
      <main className="travels">{travelCards}</main>
    </div>
  );
}

export default App;
