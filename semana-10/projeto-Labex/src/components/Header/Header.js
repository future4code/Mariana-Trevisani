import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/Home">
          <button>Home</button>
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
