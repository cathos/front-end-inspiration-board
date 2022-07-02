import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Board = ({ boards }) => {
  //state

  return (
    <section>
      <label htmlFor="boardInputs">
        ☁️Boards☁️
        <select name="Boards" id="boardInputs">
          {boards.map((input) => {
            return <option>{`${input[0]} By: ${input[1]}`}</option>;
          })}
        </select>
      </label>
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
