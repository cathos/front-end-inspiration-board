import React from "react";
import PropTypes from "prop-types";

const Card = ({ cards }) => {
  return (
    <section className="form">
      <div>
        {cards.map((card) => {
          return (
            <div>
              <p>Note: {card.message}</p>
              <button className="form-button">Remove Card</button>
              <br />
              <button className="form-button">Like</button>♡
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
