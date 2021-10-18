import React, { useState } from "react";
import { HomePage } from "./components/pages/homePage/homePage";
import MatchesPage from "./components/pages/matchsPage/matchsPage";
import styled from "styled-components";

const Layout = styled.div`
  background-color: mistyrose;
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const changePage = () => {
    if (currentPage === "home") {
      setCurrentPage("matches");
    } else {
      setCurrentPage("home");
    }
  };

  return (
    <Layout>
      {currentPage === "home" ? <HomePage /> : <MatchesPage />}
      <button onClick={changePage}>
        {currentPage === "home" ? "Ir para Matches" : "Ir para Home"}
      </button>
    </Layout>
  );
};

export default App;
