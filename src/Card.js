import React from "react";

const Card = ({ cards, increment, decrement, likesState }) => {
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
