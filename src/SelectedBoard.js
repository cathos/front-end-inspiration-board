import React from "react";
import PropTypes from "prop-types";

const SelectedBoard = ({ selectedBoard }) => {
  //return props as JSX
  const getProps = selectedBoard.map((board) => {
    return (
      <ul>
        <li>title={board.title}</li>
        <li>owner={board.owner}</li>
      </ul>
    );
  });

  //delete board
  // const deleteBoard = (id) => {
  //   deleteBoard(id);
  // };

  //render selected board with a delete button
  return (
    <section>
      <h4>Title: {getProps.title}</h4>
      <h3>Owner: {getProps.owner}</h3>
      <button>Remove Board</button>
    </section>
  );
};

export default SelectedBoard;
