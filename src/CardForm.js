import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";

const CardForm = ({ addCardData, boards }) => {
  //state of cardForm
  const [cardFormData, setCardFormData] = useState({
    message: "",
  });

  const onMessageChange = (e) => {
    setCardFormData({
      ...cardFormData,
      title: e.target.value,
    });
  };

  const onFormSubmit = (e, id) => {
    e.preventDefault();

    addCardData({
      message: cardFormData.message,
    });
    setCardFormData({
      message: "",
    });
    postCard(id);
  };

  const postCard = (id) => {
    return axios.post(
      `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`,
      {
        message: cardFormData.message,
      }
    );
  };

  return (
    <div>
      <section className="form">
        ꒰ა ♡ ໒꒱ Create Card ✧･ﾟ: *✧･ﾟ:* 𓆩♡𓆪
        <form onSubmit={onFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={cardFormData.message}
            onChange={onMessageChange}
          />
          <hr />
          <input type="submit" value="Add Card" className="form-button" />
        </form>
      </section>
    </div>
  );
};

export default CardForm;
