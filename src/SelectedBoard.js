import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const SelectedBoard = ({ board, deleteBoard, addCard }) => {
  const removeBoard = () => {
    deleteBoard();
  };
  // console.log(`board data: ${board}`);
  const newCard = () => {
    addCard();
  };

  return (
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
  );
};

// SelectedBoard.propTypes = {
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
// };

export default SelectedBoard;
