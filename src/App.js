import React from "react";
import { useState, useReducer, useEffect } from "react";
import "./App.css";
import "./dropdown.css";
import axios from "axios";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import About from "./Pages/about";
import BoardsPage from "./Pages/boards";
import Home from "./Pages/home";
import CardsPage from "./Pages/cards";
import Header from "./Components/ui/Header";
import "./Styles/header.css";
import NotFound from "./Pages/NotFound";
import Selected from "./Pages/Selected";
import Footer from "./Components/ui/Footer";
function App() {
  //GET cards by board Id
  const displayCards = async (id) => {
    const response = await axios.get(
      `http://orange-purple-inspo-board.herokuapp.com/cards/${id}`
    );
    setCards(response.data);
  };
  //setSelected Board by id
  const getSelectedBoard = async (id) => {
    const resp = await axios.get(
      `https://orange-purple-inspo-board.herokuapp.com/boards/${id}`
    );
    setSelectedBoard(resp.data.board);
  };

  const addCardToBoard = (newCard) => {
    const newCardData = [...cards];
    const nextId = Math.max(...newCardData.map((card) => card.id)) + 1;

    newCardData.push({
      id: nextId,
      likes_count: 0,
    });
  };
  //submit forms
  const addBoardData = (newBoard) => {
    const newBoardData = [...boards];
    const nextId = Math.max(...newBoardData.map((board) => board.id)) + 1;

    newBoardData.push({
      id: nextId,
      title: newBoard.title,
      owner: newBoard.owner,
    });
    setBoards(newBoardData);
  };

  //submit card forms
  const addCardData = (newCard) => {
    const newCardData = [...cards];
    const nextId = Math.max(...newCardData.map((card) => card.id)) + 1;

    newCardData.push({
      id: nextId,
      message: newCard.message,
    });
    setCards(newCardData);
  };
  //boards state
  const [boards, setBoards] = useState([]);

  //card state
  const [cards, setCards] = useState([]);

  //value of selected board
  const [value, setValue] = useState(null);

  //GET request boards
  const getBoards = async () => {
    const response = await axios.get(
      "https://orange-purple-inspo-board.herokuapp.com/boards"
    );
    setBoards(response.data);
  };

  useEffect(() => {
    getBoards();
  }, []);

  const BOARD_ACTIONS = {
    DELETE_BOARD: "deleteBoard",
    ADD_CARD: "addCard",
  };

  //toggle card likes
  const cardLikes = (id) => {
    console.log(cards);
    // const newLikedData = [...cards];
    // const liked = newLiked(newLikedData.map(card => card.likes_count)) + 1
    const newLikedData = cards.map((card) => {
      if (card.id === id) {
        if (card.likes_count === 0) {
          return {
            ...card,
            likes_count: (card.likes_count = card.likes_count + 1),
          };
        } else if (card.likes_count === 1) {
          return {
            ...card,
            likes_count: (card.likes_count = card.likes_count - 1),
          };
        } else {
          return card;
        }
      } else {
        return card;
      }
    });
    console.log(id);
    // console.log(likes);
    console.log(cards);
    console.log(newLikedData);
    setCards(newLikedData);
  };

  //adds form elements to dropdown in board component
  //send this state to SelectedBoard
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
  });

  //updates selectedBoard state & adds selectedBoard to SelectedBoard component onClick
  const boardChange = (e) => {
    setSelectedBoard(e.target.value);
    if (e.target.value) {
      // setSelectedHidden(false);
    }
  };

  //Board actions with useReducer
  //selectedBooards actions
  //delete board
  //add card
  const boardReducer = (selectedBoardState, action) => {
    switch (action.type) {
      // case BOARD_ACTIONS.ADD_CARD:
      // return setCardFormHidden(false);
      // case BOARD_ACTIONS.DELETE_BOARD:
      //   return boards.filter((form) => form.id !== action.payload.id);
      default:
        return selectedBoardState;
    }
  };
  const [selectedBoardState, selectedBoardDispatch] = useReducer(
    boardReducer,
    []
  );
  const deleteBoard = () => {
    selectedBoardDispatch({ type: BOARD_ACTIONS.DELETE_BOARD });
  };

  const addCard = () => {
    selectedBoardDispatch({ type: BOARD_ACTIONS.ADD_CARD });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/boards/:boardID"
          element={
            <Selected
              setSelectedBoard={setSelectedBoard}
              boards={selectedBoard}
              selectedBoardState={selectedBoardState}
              deleteBoard={deleteBoard}
              addCard={addCard}
              cards={cards}
              // increment={increment}
              // decrement={decrement}
              // toggle={toggle}
              // likesState={likesState}
              cardLikes={cardLikes}
            />
          }
        />
        <Route
          path="/boards"
          element={
            <BoardsPage
              getSelectedBoard={getSelectedBoard}
              handleChange={boardChange}
              options={boards}
              prompt="Select Board"
              value={value}
              onChange={(value) => setValue(value)}
              addBoardData={addBoardData}
              displayCards={displayCards}
            />
          }
        />
        <Route
          path="/cards"
          element={
            <CardsPage
              addCardData={addCardData}
              options={boards}
              boards={boards}
              setBoards={setBoards}
              cards={cards}
              // postCardToBoard={postCardToBoard}
              selectedBoard={selectedBoard}
              clickedBoard={(value) => setValue(value)}
              addCardToBoard={addCardToBoard}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
