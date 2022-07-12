import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import axios from "axios";



const Board = ({ boards, handleChange }) => {
  const [boardList, setBoardList] = useState([])
  const axios = require("axios");
  axios.get("https://orange-purple-inspo-board.herokuapp.com/boards")
  .then(function(response) {
    response = response.data
    setBoardList(response)
  // useEffect = (() => {

  //   }, [])
  return (
    <section className="displayBoards">
      <label>☁️Boards☁️</label>
      <select className="dropdown" onClick={handleChange}>
        {boardList.map((board) => {
          //got an array wanted an object error...
          return <option>{`Title: ${board.title} By: ${board.owner}`}</option>;
        })}
      </select>
    </section>
  );
})};


Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
