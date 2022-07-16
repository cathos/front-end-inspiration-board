import React, { useState } from "react";
import axios from "axios";

const Card = ({ cards, increment, decrement, likesState }) => {
  const [boardCards, setBoardCards] = useState({
    message: "",
  });
  const getCards = async (id) => {
    const response = await axios.get(
      `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`
    );
    setBoardCards(response.data);
  };

  //increment or decrement likes and display
  const displayLikes = () => {
    if (likesState.count < 1) {
      increment();
    } else {
      decrement();
    }
  };
  return (
    <section className="form">
      <div>
        Cards
        {cards.map((card) => {
          return (
            <div>
              <p>Note: {card.message}</p>
              <button className="form-button">Remove Card</button>
              <br />
              <button className="form-button" onClick={displayLikes}>
                Like
              </button>
              ♡{likesState.count}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
