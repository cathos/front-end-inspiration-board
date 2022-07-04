import React from "react";
import PropTypes from "prop-types";
//API CONSIDERATIONS

//user selects a Board from the dropdown which uses API READS and POSTS to render it to the SelectedBoard Component
//SelectedBoard component READS the cards associatd with board and reads the board
//SelectedBoard and Board have the same id
//id is not rendered
//id is used to deleteBoard and associated cards and to addCards

const SelectedBoard = ({ board, deleteBoard, addCard }) => {
  const removeBoard = () => {
    deleteBoard();
  };

  const newCard = () => {
    addCard();
  };

  return (
    <section className="form">
      <h4>Selected Board</h4>
      {board}
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

SelectedBoard.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default SelectedBoard;
