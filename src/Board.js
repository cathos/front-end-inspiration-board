import React from "react";
import PropTypes from "prop-types";

const Board = ({ boards }) => {
  return (
    <section>
      <caption>☁️Boards☁️</caption>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Owner</th>
          </tr>
        </thead>
        {boards.map((input, table_pos) => {
          return (
            <tr>
              <th>{input[0]}</th>
              <th>{input[1]}</th>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
