import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Heart from "../Images/heart.png";
import Exit from "../Images/exit.png";
import "../Styles/cards.css";
const Selected = ({
  deleteBoard,
  addCard,
  boards,
  cards,
  toggle,
  likesState,
  increment,
  decrement,
  cardLikes,
}) => {
  // const { boardsID } = useParams();
  const removeBoard = () => {
    deleteBoard();
  };

  const newCard = () => {
    addCard();
  };

  // const likeCard = (id) => {
  //   console.log(likesState);
  //   console.log("heart <3");
  //   console.log(id);
  //   toggle(id);
  // };

  return (
    <div className="App">
      <section>
        <h4>Selected Board</h4>
        <div>{`Title: ${boards.title} By: ${boards.owner}`}</div>
        <hr />
        {cards.map((card) => {
          return (
            // <div className="cards">
            <div className="singleCard" key={card.id}>
              <p className="exit">
                <img
                  className="exit-class"
                  src={Exit}
                  width={50}
                  height={50}
                  alt=""
                />
              </p>
              <h2 className="message">Message: {card.message}</h2>
              <h2 className="likes">
                <div className="heart" onClick={() => cardLikes(card.id)}>
                  <img
                    className="heart-class"
                    src={Heart}
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                {card.likes_count}
              </h2>
            </div>
            // </div>
          );
        })}
        <br />
        <div className="board-buttons">
          <button className="form-button">Remove Board</button>
          <button className="form-button">Add Cards</button>
        </div>
      </section>
      <Link to="/boards">Boards Home</Link>
    </div>
  );
};

// SelectedBoard.propTypes = {
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
// };

export default Selected;
