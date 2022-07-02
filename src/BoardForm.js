import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

//BoardForm accepts prop, addBoardForm, from App.js
const BoardForm = ({ addBoardForm }) => {
  const handleSubmit = (e) => {
    //pass the state objects to the prop
    addBoardForm([boardTitle, boardOwner]);
    alert("Board Created!✨");
    e.preventDefault();
  };

  //keep track of states of inputs, title and owner
  const [boardTitle, setBoardTitle] = useState();
  const [boardOwner, setBoardOwner] = useState();

  //return BoardForm as React Component
  return (
    // onSubmit event listener run callback function which returns the handleSubmit
    // function after it's passed the event, or user input, e
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Title</label>
      <br />
      <input
        name="boardTitle"
        type="text"
        //event listener to update state by passing state the event target,
        //e, which has the user's input
        onChange={(e) => {
          setBoardTitle(e.target.value);
        }}
        //value prop is corresponding state object
        value={boardTitle}
      />
      <br />
      <label>Owner</label>
      <br />
      <input
        name="boardOwner"
        type="text"
        //event listener which updates state
        onChange={(e) => {
          setBoardOwner(e.target.value);
        }}
        //value prop is corresponding state object
        value={boardOwner}
      />
      <br />
      <input type="submit" value="Add Board❕" />
    </form>
  );
};
export default BoardForm;
