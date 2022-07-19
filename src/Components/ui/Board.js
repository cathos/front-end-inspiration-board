import React from "react";
import PropTypes from "prop-types";

//title, owner, id
//pass boards prop from app.js
//pass to dropdown which renders this into a dropdown of board to select
const Board = ({ boards }) => {
  return (
    <div>
      {boards.title}
      {boards.owner}
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
