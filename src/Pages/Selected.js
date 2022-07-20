import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Heart from "../Images/heart.png";
import Exit from "../Images/exit.png";
import "../Styles/cards.css";
import Card from "../Components/ui/Card";
const Selected = ({
  deleteBoard,
  addCard,
  boards,
  minusLikes,
  addLikes,
  cards,
  incLikes,
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
        />
      );
    });
  };

  return (
    <div className="App">
      <section>
        <h4>Selected Board</h4>
        <div>{`Title: ${boards.title} By: ${boards.owner}`}</div>
        <hr />
        <section>{getCardsJSX(cards)}</section>
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
