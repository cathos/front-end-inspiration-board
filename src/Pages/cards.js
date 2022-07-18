import React from "react";

const CardsPage = ({ cards }) => {
  return (
    <div className="App">
      <h1>InspoBoard Cards Page</h1>
      <section>
        {cards.map((card) => {
          return (
            <ul>
              <li key={card.id}>Message: {card.message}</li>
              <li>Likes: {card.likes}</li>
            </ul>
          );
        })}
      </section>
    </div>
  );
};

export default CardsPage;
