import React from "react";
import PropTypes from "prop-types";

const Board = ({ boards, handleChange }) => {
  return (
    <section className="displayBoards">
      <label>☁️Boards☁️</label>
      <select className="dropdown" onClick={handleChange}>
        {boards.map((board) => {
          //got an array wanted an object error...
          return <option>{`Title: ${board.title} By: ${board.owner}`}</option>;
        })}
      </select>
    </section>
  );
};

Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
