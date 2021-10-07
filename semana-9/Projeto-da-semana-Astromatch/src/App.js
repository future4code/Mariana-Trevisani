import React, { useState } from "react";
import axios from "axios";
import { HomePage } from "./components/pages/homePage/homePage";
import MatchesPage from "./components/pages/matchsPage/matchsPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const changePage = () => {
    if (currentPage === "home") {
      setCurrentPage("matches");
    } else {
      setCurrentPage("home");
    }
  };

  const cleanMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana-stamatakis-maryam/clear"
      )
      .then((res) => {
        "matches apagados";
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      {currentPage === "home" ? <HomePage /> : <MatchesPage />}
      <button onClick={changePage}>
        {currentPage === "home" ? "Ir para Matches" : "Ir para Home"}
      </button>
      <button onClick={cleanMatches}>Limpar Matches</button>
    </div>
  );
};

export default App;
