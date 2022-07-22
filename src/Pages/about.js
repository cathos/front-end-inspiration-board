import React from "react";
import "../Styles/about.css";

const About = () => {
  return (
    <div className="App">
      <div id="About">
        <h1>InspoBoard About Page</h1>
        <div className="about-container">
          <h2>orange-purple</h2>
          <div>
            <p>
              The members of orange-purple are students in Ada Developers cohort
              17. Together, we are the creators of this inspiration board!
            </p>
          </div>
          <div>
            <ul>
              <li>Heather</li>
              <li>Hillary</li>
              <li>Katina</li>
              <li>Tyrah</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
