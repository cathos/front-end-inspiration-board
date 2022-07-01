import React from "react";
import PropTypes from "prop-types";

const Board = ({ title, owner, deleteBoard }) => {
  const deleted = (id) => {
    deleteBoard(id);
  };

  return (
    <main>
      <h1>Title: {title}</h1>
      <h3>Owner: {owner}</h3>
      <button onClick={deleted}>Delete Board</button>
    </main>
  );
};

Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

export default Board;
