import React from "react";
import "../Styles/animate.css";

const Home = () => {
  return (
    <div className="App">
      <div id="Home">
        <h1>InspoBoard Home Page</h1>
        <p className="home-text">
          Welcome to inspiration board! This is a digital board where you can
          <span>post kind words</span>,<span> encouraging messages</span>,
          <span>inspirational quotes</span>, jokes... anything you want that
          might make your day better. You can create different boards, each with
          their own corresponding cards. If someone else likes what the cards
          say they can give it some love, with our likes counter.{" "}
          <span>Please use and enjoy for all your inspiration needs</span>!
        </p>
      </div>
    </div>
  );
};

export default Home;
