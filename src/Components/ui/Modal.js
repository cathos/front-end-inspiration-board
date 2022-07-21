import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/modal.css";

export default function Modal({
  setOptionsPrompt,
  optionsPrompt,
  boardId,
  removeBoard,
}) {
  let navigate = useNavigate();

  const viewBoard = () => {
    navigate(`${boardId}`);
  };

  const deleteBoard = () => {
    removeBoard(boardId);
  };

  if (!optionsPrompt) return null;

  return (
    <section className="modal-container">
      <div className="modal-header">
        <p>Select Option</p>
        <span className="close-modal">x</span>
        <div className="modal-body">
          <button onClick={() => setOptionsPrompt(false)}>
            Select Another Board
          </button>
          <button onClick={viewBoard}>View boards</button>
          <button onClick={deleteBoard}>Delete This Board</button>
          <div className="modal-footer"></div>
        </div>
      </div>
    </section>
  );
}
