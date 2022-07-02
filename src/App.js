import Board from "./Board.js";
import cardDataJson from "./card.json";
// import boardDataJson from "./Boards.json";
import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./Card.js";
import BoardForm from "./BoardForm.js";

function App() {
  //keep track of state of card object
  const [cardObject, setCardData] = useState(cardDataJson);

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
          <h4>Selected Board</h4>
        </section>
        <section>
          <caption>Create Board ⁺ 𓂋 𓈒 ♡</caption>
          <BoardForm addBoardForm={addBoardForm} />
        </section>
        <section>
          <h1>Placeholder for Cards Component</h1>
          {/* <Card cardData={cardObject} /> */}
        </section>
        <section>
          <h1>Placeholder for Cards Form Component</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
