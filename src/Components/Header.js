import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>♥*♡∞:｡.｡ InspoBoard ｡.｡:∞♡*♥</h1>
      <br />
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/boards">Boards</Link>
        <Link to="/cards">Cards</Link>
      </nav>
      <button>Ψ ♥* Dark Mode .｡:†</button>
    </header>
  );
};

export default Header;
