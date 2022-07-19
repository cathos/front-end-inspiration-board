import React from "react";
import { Link } from "react-router-dom";
import Tea from "../Images/title_tea.png";
import Hplant from "../Images/hanging_plant.png";
import Plant from "../Images/plant.png";
import Sleep from "../Images/sleeping_cat.png";
import Books from "../Images/book-stack.png";
import { motion } from "framer-motion/dist/framer-motion";

const Header = () => {
  return (
    <motion.header className="Header" animate={{}}>
      <motion.h1
        className="animate"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.2 }}
      >
        ♥ InspoBoard ♥
      </motion.h1>
      <motion.img
        src={Tea}
        width={80}
        height={80}
        alt=""
        animate={{ scale: 1 }}
        initial={{ scale: 1.5 }}
      />
      <nav className="links">
        <motion.img
          src={Plant}
          width={70}
          height={70}
          alt=""
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        />
        <img src={Books} width={70} height={70} alt="" />
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/boards">Boards</Link>
        <Link to="/cards">Cards</Link>
      </nav>
      <img src={Sleep} width={80} height={80} alt="" />
      {/* <button>Ψ ♥* Dark Mode .｡:†</button> */}
    </motion.header>
  );
};

export default Header;
