import React from "react";
import { Link } from "react-router-dom";
import Tea from "../Images/title_tea.png";
import Hplant from "../Images/hanging_plant.png";
import Plant from "../Images/plant.png";
import Sleep from "../Images/sleeping_cat.png";
import Books from "../Images/book-stack.png";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        {/* ♥*♥∞:｡.｡ InspoBoard ｡.｡:∞♡*♥ */}♥ InspoBoard ♥
        {/* <img src="../Images/title_tea.png" width={50} height={40} alt="" /> */}
      </h1>
      <img src={Tea} width={80} height={80} alt="" />
      <nav className="links">
        <img src={Plant} width={70} height={70} alt="" />
        <img src={Books} width={70} height={70} alt="" />
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/boards">Boards</Link>
        <Link to="/cards">Cards</Link>
      </nav>
      <img src={Sleep} width={80} height={80} alt="" />
      {/* <button>Ψ ♥* Dark Mode .｡:†</button> */}
    </header>
  );
};

export default Header;
