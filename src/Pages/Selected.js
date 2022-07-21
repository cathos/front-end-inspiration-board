import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import Heart from "../Images/heart.png";
import Exit from "../Images/exit.png";
import "../Styles/cards.css";
import Card from "../Components/ui/Card";
import { useNavigate } from "react-router-dom";
const Selected = ({
  deleteBoard,
  addCard,
  boards,
  minusLikes,
  addLikes,
  cards,
  removeCard,
  incLikes,
  removeBoard,
  setPrompt,
  value,
}) => {
  const getCardsJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          minusLikes={minusLikes}
          addLikes={addLikes}
          likes_count={card.likes_count}
          board_id={card.board_id}
          incLikes={incLikes}
          removeCard={removeCard}
        />
      );
    });
  };
  let navigate = useNavigate();

  const addNav = () => {
    navigate("/cards");
  };

  const deleteThisBoard = () => {
    removeBoard(boards.id);
    navigate("/boards");
    value.owner = "";
  };

  return (
    <div className="App">
      <section>
        <h4>Selected Board</h4>
        <div>{`Title: ${boards.title} By: ${boards.owner}`}</div>
        <hr />
        <section className="cards">{getCardsJSX(cards)}</section>
        <br />
        <div className="board-buttons">
          <button className="form-button" onClick={deleteThisBoard}>
            Remove Board
          </button>
          <button className="form-button" onClick={addNav}>
            Add Cards
          </button>
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
