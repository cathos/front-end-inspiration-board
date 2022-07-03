import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Board = ({ boards }) => {
  //adds form elements to dropdown in board component
  const [board, setBoard] = useState();

  //for each boards input, include in dropdown menu
  return (
    <section className="displayBoards">
      <label>☁️Boards☁️</label>
      <select
        className="dropdown"
        value={board}
        onChange={(e) => setBoard(e.target.value)}
      >
        {boards.map((input) => {
          //got an array wanted an object error...
          return <option>{`${input.title} By: ${input.owner}`}</option>;
        })}
      </select>

      <p>{board}</p>
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
