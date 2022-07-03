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
  //keep track of state of card object
  // const [cardObject, setCardData] = useState(cardDataJson);

  //keep track of state of all BoardForms
  const [boardForms, setBoardForms] = useState([]);

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
          <Board boards={boardForms} />
        </section>
        <section>
          {/* <SelectedBoard /> */}
          <h4>Selected Board</h4>
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
