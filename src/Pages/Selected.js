import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const Selected = ({ deleteBoard, addCard, boards }) => {
  // const { boardsID } = useParams();
  const removeBoard = () => {
    deleteBoard();
  };

  const newCard = () => {
    addCard();
  };

  return (
    <div className="App">
      <section className="form">
        <h4>Selected Board</h4>
        <div>{`Title: ${boards.title} By: ${boards.owner}`}</div>

        <br />
        <div className="board-buttons">
          <button className="form-button">Remove Board</button>
          <button className="form-button">Add Cards</button>
        </div>
      </section>
      <Link to="/boards">Boards Home</Link>
    </div>
  );
};

// SelectedBoard.propTypes = {
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
// };

export default Selected;
