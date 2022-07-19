import React, { useState } from "react";
import axios from "axios";
import "../Styles/cardsdropdown.css";

const CardsPage = ({
  addCardData,
  options,
  setBoards,
  cards,
  boards,
  getBoards,
  // postCardToBoard,
  clickedBoard,
  addCardToBoard,
}) => {
  // const onFormSubmit = (e) => {
  //   e.preventDefault();

  //   addCardData({
  //     message: cardFormData.message,
  //     board_id: board.id,
  //   });
  //   setCardFormData({
  //     message: "",
  //   });
  //   postCardToBoard(board.id);
  // };
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

  // const onFormSubmit = (e, id, query) => {
  //   e.preventDefault();
  //   console.log(query);

  // addCardData({
  //   message: cardFormData.message,
  // });
  // postCard(id);
  // setCardFormData({
  //   message: "",
  // });
  // };

  // const postCard = async (id) => {
  //   const newBoard = await axios.post(
  //     `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`,
  //     {
  //       message: cardFormData.message,
  //     }
  //   );
  //   setBoards(...boards, (cards.message = newBoard.message));
  // };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const selectOption = (searchTerm) => {
    setQuery(searchTerm);
  };

  const onSearch = (searchTerm) => {
    setQuery(searchTerm);
    boards.filter((board) => {
      if (board.title === searchTerm) {
        addCardToBoard({
          message: cardFormData.message,
          board_id: board.id,
        });
        postCardToBoard(board.id);
        return board.id;
      } else {
        return board;
      }
    });
  };

  const postCardToBoard = (id) => {
    return axios.post(
      `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`,
      {
        message: cardFormData.message,
        likes_count: cardFormData.likes_count,
        board_id: id,
      }
    );
  };
  return (
    <div className="App">
      <section className="form">
        ꒰ა ♡ ໒꒱ Create Card ✧･ﾟ: *✧･ﾟ:* 𓆩♡𓆪
        <form>
          <label>Title</label>
          <input type="text" onChange={onMessageChange} />
          <hr />
          <input
            type="text"
            value={query}
            placeholder="Search Boards"
            onChange={onChange}
          />
          <hr />
          <div className="cards-dropdown">
            <div className="dropdown-search" type="text">
              {options
                .filter((option) => {
                  const searchTerm = query.toLowerCase();
                  const title = option.title.toLowerCase();

                  return searchTerm && title.includes(searchTerm);
                })
                .map((option) => {
                  return (
                    <div
                      className="dropdown-row"
                      key={option.id}
                      onClick={() => onSearch(option.title)}
                      // onClick={selectOption}
                    >
                      {option.title}
                    </div>
                  );
                })}
            </div>
          </div>
          <button
          // onClick={() => onSearch(query)}
          // type="submit"
          // className="form-button"
          >
            Add Card
          </button>
        </form>
      </section>
    </div>
  );
};

export default CardsPage;
