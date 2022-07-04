import Board from "./Board.js";
import React from "react";
import { useState, useReducer } from "react";
import "./App.css";
import Card from "./Card.js";
import BoardForm from "./BoardForm.js";
import SelectedBoard from "./SelectedBoard.js";
import CardForm from "./CardForm.js";

function App() {
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };
  //userReducer function to increment and decrement likesCount
  const reducer = (likesState, action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: likesState.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: likesState.count - 1 };
      default:
        return likesState;
    }
  };
  //increment and decrement likesCount
  const [likesState, dispatch] = useReducer(reducer, { count: 0 });
  //function to increment likesCount
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  //function to decrement likesCount
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  //hide selected board
  const [selectedHidden, setSelectedHidden] = useState(true);

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

  return (
    <div>
      <header className="Header">
        <h1>♥*♡∞:｡.｡ InspoBoard ｡.｡:∞♡*♥</h1>
      </header>
      <div className="App">
        <section>
          <Board boards={boardForms} handleChange={boardChange} />
        </section>
        <section>
          {!selectedHidden ? <SelectedBoard board={selectedBoard} /> : null}
        </section>
        <section>
          <BoardForm addBoardForm={addBoardForm} />
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
          <CardForm addCardForm={addCardForm} />
        </section>
      </div>
    </div>
  );
}

export default App;
