import Board from "./Board.js";
import cardDataJson from "./card.json";
import boardDataJson from "./Boards.json";
import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./Card.js";

function App() {
  const [boardData, setBoardData] = useState(boardDataJson);
  const [cardData, setCardData] = useState(cardDataJson);

  //delete board functionality
  const deleteBoard = (id) => {
    const newBoardData = boardData.filter((board) => {
      if (board.id !== id) {
        return true;
      } else {
        return board;
      }
    });
    //change state of boards
    setBoardData(newBoardData);
  };
  const getCardJsx = (cardData) => {
    return cardData.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          owner={card.owner}
          deleteCard={card.deleteCard}
          likesCount={card.likesCount}
        />
      );
    });
  };
  const getBoardJsx = (boardData) => {
    return cardData.map((board) => {
      return (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          deleteBoard={deleteBoard}
        />
      );
    });
  };

  return (
    <div>
      <header className="Header">
        <h1>InspoBoard</h1>
      </header>
      <div className="App">
        <section>
          <Board />
        </section>
        <section>
          <h1>Placeholder for Selected Board Component</h1>
        </section>
        <section>
          <h1>Placeholder for Board Form Component</h1>
        </section>
        <section>
          <h1>Placeholder for Cards Component</h1>
          <Card />
        </section>
        <section>
          <h1>Placeholder for Cards Form Component</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
