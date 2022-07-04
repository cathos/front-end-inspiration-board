import Board from "./Board.js";
import React from "react";
import { useState, useReducer } from "react";
import "./App.css";
import Card from "./Card.js";
import BoardForm from "./BoardForm.js";
import SelectedBoard from "./SelectedBoard.js";
import CardForm from "./CardForm.js";

function App() {
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
  const [selectedHidden, setSelectedHidden] = useState(true);
  //hide CardForm
  const [cardFormHidden, setCardFormHidden] = useState(true);
  //hide Card
  const [cardHidden, setCardHidden] = useState(true);

  const [boardForms, setBoardForms] = useState([]);

  //update cardForm state and send to card to display
  const [cardForms, setCardForms] = useState([]);

  //adds form elements to dropdown in board component
  //send this state to SelectedBoard
  const [selectedBoard, setSelectedBoard] = useState([]);

  //updates selectedBoard state & adds selectedBoard to SelectedBoard component onClick
  const boardChange = (e) => {
    setSelectedBoard(e.target.value);
    if (e.target.value) {
      setSelectedHidden(false);
    }
  };

  //update boardForm state to pass to board
  const addBoardForm = (form) => {
    let forms = [...boardForms, form];
    setBoardForms(forms);
  };

  //update cardForm state to pass to Card
  const addCardForm = (form) => {
    let forms = [...cardForms, form];
    setCardForms(forms);
  };

  //Board actions with useReducer
  //selectedBooards actions
  //delete board
  //add card
  const boardReducer = (selectedBoardState, action) => {
    switch (action.type) {
      case BOARD_ACTIONS.ADD_CARD:
        return setCardFormHidden(false);
      case BOARD_ACTIONS.DELETE_BOARD:
        return boardForms.filter((form) => form.id !== action.payload.id);
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
          <Board boards={boardForms} handleChange={boardChange} />
        </section>
        <section>
          {!selectedHidden ? (
            <SelectedBoard
              board={selectedBoard}
              selectedBoardState={selectedBoardState}
              deleteBoard={deleteBoard}
              addCard={addCard}
            />
          ) : null}
        </section>
        <section>
          <BoardForm addBoardForm={addBoardForm} />
        </section>
        <section>
          {!cardHidden ? (
            <Card
              cards={cardForms}
              increment={increment}
              decrement={decrement}
              likesState={likesState}
            />
          ) : null}
        </section>
        <section>
          {!cardFormHidden ? (
            <CardForm addCardForm={addCardForm} setCardHidden={setCardHidden} />
          ) : null}
        </section>
      </div>
    </div>
  );
}

export default App;
