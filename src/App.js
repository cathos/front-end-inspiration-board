import Board from "./Board.js";
import React from "react";
import { useState, useReducer, useEffect } from "react";
import "./App.css";
import "./dropdown.css";
import Card from "./Card.js";
import BoardForm from "./BoardForm.js";
import SelectedBoard from "./SelectedBoard.js";
import CardForm from "./CardForm.js";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
function App() {
  //setSelected Board by id
  const getSelectedBoard = async (id) => {
    const resp = await axios.get(
      `https://orange-purple-inspo-board.herokuapp.com/boards/${id}`
    );
    console.log(resp.data.board);
    setSelectedBoard(resp.data.board);
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

  //value
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

  //hide selected board
  // const [selectedHidden, setSelectedHidden] = useState(true);
  //hide CardForm
  // const [cardFormHidden, setCardFormHidden] = useState(true);
  //hide Card
  // const [cardHidden, setCardHidden] = useState(true);

  // const [boardForms, setBoardForms] = useState([]);

  //update cardForm state and send to card to display
  const [cardForms, setCardForms] = useState([]);

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

  //update boardForm state to pass to board
  // const addBoardForm = (form) => {
  //   let forms = [...boardForms, form];
  //   setBoardForms(forms);
  // };

  //update cardForm state to pass to Card
  // const addCardForm = (form) => {
  //   let forms = [...cardForms, form];
  //   setCardForms(forms);
  // };

  //Board actions with useReducer
  //selectedBooards actions
  //delete board
  //add card
  const boardReducer = (selectedBoardState, action) => {
    switch (action.type) {
      // case BOARD_ACTIONS.ADD_CARD:
      // return setCardFormHidden(false);
      case BOARD_ACTIONS.DELETE_BOARD:
        return boards.filter((form) => form.id !== action.payload.id);
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
    <div>
      <header className="Header">
        <h1>♥*♡∞:｡.｡ InspoBoard ｡.｡:∞♡*♥</h1>
        <br />
        <button>Ψ ♥* Dark Mode .｡:†</button>
      </header>

      <div className="App">
        <section>
          <Board
            getSelectedBoard={getSelectedBoard}
            handleChange={boardChange}
            options={boards}
            prompt="Select Board"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </section>
        <section>
          <SelectedBoard
            setSelectedBoard={setSelectedBoard}
            board={selectedBoard}
            selectedBoardState={selectedBoardState}
            deleteBoard={deleteBoard}
            addCard={addCard}
          />
        </section>
        <section>
          <BoardForm addBoardData={addBoardData} />
        </section>
        <section>
          <Card
            cards={cardForms}
            increment={increment}
            decrement={decrement}
            likesState={likesState}
          />
        </section>
        <section>
          <CardForm
            addCardData={addCardData}
            boards={boards}
            setBoards={setBoards}
            cards={cards}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
