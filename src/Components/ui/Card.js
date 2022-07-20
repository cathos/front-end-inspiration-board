import React from "react";
import PropTypes from "prop-types";
import Heart from "../../Images/heart.png";
import Exit from "../../Images/exit.png";
import "../../Styles/cards.css";

const Card = ({ id, message, likes_count, minusLikes, addLikes, incLikes }) => {
  const updateLikes = () => {
    if (likes_count) {
      addLikes(id, likes_count);
    } else {
      addLikes(id);
    }
  };
  return (
    <div className="singleCard">
      <p className="exit">
        <img className="exit-class" src={Exit} width={50} height={50} alt="" />
      </p>
      <h2 className="message">Message: {message}</h2>
      <h2 className="likes">
        <div className="heart" onClick={updateLikes}>
          <img
            className="heart-class"
            src={Heart}
            width={50}
            height={50}
            alt=""
          />
        </div>
        {likes_count}
      </h2>
    </div>
  );
};

Card.propTypes = {
  board_id: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  incLikes: PropTypes.func.isRequired,
};

export default Card;
