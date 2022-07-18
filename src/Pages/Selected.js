import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const Selected = ({ board, deleteBoard, addCard }) => {
  const { boardsID } = useParams();
  const removeBoard = () => {
    deleteBoard();
  };

  const newCard = () => {
    addCard();
  };

  return (
    <div className="App">
      <section className="form">
        <h4>Selected Board</h4>
        <div>{`Title: ${board.title} By: ${board.owner}`}</div>

        <br />
        <div className="board-buttons">
          <button className="form-button">Remove Board</button>
          <button className="form-button" onClick={newCard}>
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
