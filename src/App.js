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
import Header from "./Components/Header";
import "./Styles/header.css";
import NotFound from "./Pages/NotFound";
import Selected from "./Pages/Selected";
import Footer from "./Components/Footer";

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

  //like actions
  const LIKE_ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };

  const BOARD_ACTIONS = {
    DELETE_BOARD: "deleteBoard",
    ADD_CARD: "addCard",
  };

  //userReducer function to increment and decrement likesCount
  const likesReducer = (likesState, action) => {
    switch (action.type) {
      case LIKE_ACTIONS.INCREMENT:
        return { count: likesState.count + 1 };
      case LIKE_ACTIONS.DECREMENT:
        return { count: likesState.count - 1 };
      default:
        return likesState;
    }
  };
  //increment and decrement likesCount
  const [likesState, dispatch] = useReducer(likesReducer, { count: 0 });
  //function to increment likesCount
  const increment = () => {
    dispatch({ type: LIKE_ACTIONS.INCREMENT });
  };

  //function to decrement likesCount
  const decrement = () => {
    dispatch({ type: LIKE_ACTIONS.DECREMENT });
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

export function increment() {
  return {
    type: App.LIKE_ACTIONS.INCREMENT,
  };
}

export function decrement() {
  return {
    type: App.LIKE_ACTIONS.DECREMENT,
  };
}

export default App;
