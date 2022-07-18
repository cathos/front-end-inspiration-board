import React, { useState } from "react";
import axios from "axios";

const CardsPage = ({ addCardData, options, setBoards, cards, boards }) => {
  //search query state
  const [query, setQuery] = useState("");

  const [cardFormData, setCardFormData] = useState({
    message: "",
  });

  const onMessageChange = (e) => {
    setCardFormData({
      ...cardFormData,
      message: e.target.value,
    });
  };

  const onFormSubmit = (e, id, query) => {
    e.preventDefault();
    console.log(query);

    // addCardData({
    //   message: cardFormData.message,
    // });
    // postCard(id);
    // setCardFormData({
    //   message: "",
    // });
  };

  const postCard = async (id) => {
    const newBoard = await axios.post(
      `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`,
      {
        message: cardFormData.message,
      }
    );
    setBoards(...boards, (cards.message = newBoard.message));
  };

  return (
    <div className="App">
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
          <input
            type="text"
            value={query}
            placeholder="Search Boards"
            onChange={(e) => setQuery(e.target.value)}
          />
          <hr />
          <div className="dropdown">
            {options
              .filter((option) => {
                const searchTerm = query.toLowerCase();
                const title = option.title.toLowerCase();

                return searchTerm && title.includes(searchTerm);
              })
              .map((option) => {
                return (
                  <div className="dropdown-row" key={option.id}>
                    {option.title}
                  </div>
                );
              })}
          </div>
          <input value="Add Card" type="submit" className="form-button" />
        </form>
      </section>
    </div>
  );
};

export default CardsPage;
