import React from "react";
import PropTypes from "prop-types";

const Board = ({ boards, handleChange }) => {
  return (
    <section className="displayBoards">
      <label>☁️Boards☁️</label>
      <select className="dropdown" onChange={handleChange}>
        {boards.map((board) => {
          return (
            <option key={board.id} value={board.id}>
              {`Title: ${board.title} By: ${board.owner}`}
            </option>
          );
        })}
      </select>
    </section>
  );
};

Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
