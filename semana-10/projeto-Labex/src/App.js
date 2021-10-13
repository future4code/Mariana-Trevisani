import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/paginas/Home";

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Home />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
