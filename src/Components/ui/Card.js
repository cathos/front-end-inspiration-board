import React from "react";
import PropTypes from "prop-types";

//message, likes_count
//pass cards prop from app.js
//pass to selected board page which renders cards in grid
const Card = ({ cards }) => {
  return (
    <div>
      {cards.message}
      {cards.likes_count}
    </div>
  );
};

Card.propTypes = {
  board_id: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
};

export default Card;
