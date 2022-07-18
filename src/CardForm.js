import React from "react";
import { useState } from "react";
import axios from "axios";

const CardForm = ({ addCardData, boards, setBoards, cards }) => {
  //state of cardForm
  const [cardFormData, setCardFormData] = useState({
    message: "",
  });

  const onMessageChange = (e) => {
    setCardFormData({
      ...cardFormData,
      message: e.target.value,
    });
  };

  const onFormSubmit = (e, id) => {
    e.preventDefault();

    addCardData({
      message: cardFormData.message,
    });
    postCard(id);
    setCardFormData({
      message: "",
    });
  };

  const postCard = async (id) => {
    const newBoard = await axios.post(
      `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`,
      {
        message: cardFormData.message,
      }
    );
    setBoards(...boards, (cards.message = newBoard.message));
    console.log(newBoard.message);
    console.log(boards);
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
