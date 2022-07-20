import React from "react";
import { Link } from "react-router-dom";
import Tea from "../../Images/title_tea.png";
// import Hplant from "../Images/hanging_plant.png";
import Plant from "../../Images/plant.png";
import Sleep from "../../Images/sleeping_cat.png";
import Books from "../../Images/book-stack.png";
import { motion } from "framer-motion/dist/framer-motion";
import "../../Styles/animate.css";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="animate">♥ InspoBoard ♥</h1>
      <img
        src={Tea}
        width={80}
        height={80}
        alt=""
        animate={{ scale: 1 }}
        initial={{ scale: 1.5 }}
      />
      <nav className="links">
        <img
          src={Plant}
          width={70}
          height={70}
          alt=""
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        />
        <img src={Books} width={70} height={70} alt="" className="image" />
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/About">About</Link>
        </span>
        <span>
          <Link to="/boards">Boards</Link>
        </span>
        <span>
          <Link to="/cards">Cards</Link>
        </span>
      </nav>
      <img src={Sleep} width={80} height={80} alt="" />
      {/* <button>Ψ ♥* Dark Mode .｡:†</button> */}
    </header>
  );
};

export default Header;
