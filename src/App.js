import Board from "./Board.js";
import cardDataJson from "./card.json";
// import boardDataJson from "./Boards.json";
import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./Card.js";
import BoardForm from "./BoardForm.js";
import SelectedBoard from "./SelectedBoard.js";

function App() {
  //hide selected board
  const [hidden, setHidden] = useState(true);
  //keep track of state of all BoardForms
  //send this state to Board
  const [boardForms, setBoardForms] = useState([]);

  //adds form elements to dropdown in board component
  //send this state to SelectedBoard
  const [selectedBoard, setSelectedBoard] = useState([]);

  const handleChange = (e) => {
    setSelectedBoard(e.target.value);
    if (e.target.value) {
      setHidden(false);
    }
  };

  //pass this prop to BoardForm
  const addBoardForm = (form) => {
    let forms = [...boardForms, form];
    setBoardForms(forms);
  };

  return (
    <div>
      <header className="Header">
        <h1>InspoBoard</h1>
      </header>
      <div className="App">
        <section>
          <Board boards={boardForms} handleChange={handleChange} />
        </section>
        <section>
          {!hidden ? <SelectedBoard board={selectedBoard} /> : null}
        </section>
        <section>
          <BoardForm addBoardForm={addBoardForm} />
        </section>
        <section>
          <h4>Cards Component</h4>
          {/* <Card cardData={cardObject} /> */}
        </section>
        <section>
          <h4>Cards Form Component</h4>
        </section>
      </div>
    </div>
  );
}

export default App;
