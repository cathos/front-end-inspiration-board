import React from "react";
import PropTypes from "prop-types";

const SelectedBoard = ({ board }) => {
  return (
    <section className="form">
      <h4>Selected Board</h4>
      {board}
      <br />
      <div className="board-buttons">
        <button className="form-button">Remove Board</button>
        <button className="form-button">Add Cards</button>
      </div>
    </section>
  );
};

SelectedBoard.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default SelectedBoard;
