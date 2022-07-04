import Board from "./Board.js";
import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./Card.js";
import BoardForm from "./BoardForm.js";
import SelectedBoard from "./SelectedBoard.js";
import CardForm from "./CardForm.js";

function App() {
  //hide selected board
  const [selectedHidden, setSelectedHidden] = useState(true);

  const [boardForms, setBoardForms] = useState([]);

  //send this state to card
  const [cardForms, setCardForms] = useState([]);

  //adds form elements to dropdown in board component
  //send this state to SelectedBoard
  const [selectedBoard, setSelectedBoard] = useState([]);

  const boardChange = (e) => {
    setSelectedBoard(e.target.value);
    if (e.target.value) {
      setSelectedHidden(false);
    }
  };

  const addCardForm = (form) => {
    let forms = [...cardForms, form];
    setCardForms(forms);
  };

  //pass this prop to BoardForm
  const addBoardForm = (form) => {
    let forms = [...boardForms, form];
    setBoardForms(forms);
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
          <Card cards={cardForms} />
        </section>
        <section>
          <CardForm addCardForm={addCardForm} />
        </section>
      </div>
    </div>
  );
}

export default App;
