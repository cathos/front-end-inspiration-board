import React from "react";
import PropTypes from "prop-types";

const SelectedBoard = ({ board }) => {
  return (
    <section className="form">
      <h4>Selected Board</h4>
      {board}
      <button className="form-button">Remove Board</button>
    </section>
  );
};

SelectedBoard.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default SelectedBoard;
