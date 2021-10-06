import React, { useState } from "react";
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
    console.log("Esse botão vai limpar os matches");
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
