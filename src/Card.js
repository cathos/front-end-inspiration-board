import React from "react";
import PropTypes from "prop-types";

const Card = ({ id, message, deleteCard, likesCount }) => {
  return (
    <ul>
      <li>
        <h4>Message: {message}</h4>
      </li>
      <li>
        <h4>Likes: {likesCount}</h4>
      </li>
      <button onClick={deleteCard}>Delete Card</button>
    </ul>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  likesCount: PropTypes.func.isRequired,
};

export default Card;
