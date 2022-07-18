import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
const BoardsPage = ({
  options,
  prompt,
  value,
  onChange,
  getSelectedBoard,
  addBoardData,
}) => {
  // let navigate = useNavigate();
  const [boardFormData, setBoardFormData] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (e) => {
    setBoardFormData({
      ...boardFormData,
      title: e.target.value,
    });
  };

  const onOwnerChange = (e) => {
    setBoardFormData({
      ...boardFormData,
      owner: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    addBoardData({
      title: boardFormData.title,
      owner: boardFormData.owner,
    });
    setBoardFormData({
      title: "",
      owner: "",
    });
    postBoard();
  };

  const postBoard = () => {
    return axios.post(
      "https://orange-purple-inspo-board.herokuapp.com/boards",
      {
        title: boardFormData.title,
        owner: boardFormData.owner,
      }
    );
  };

  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div>
        <h1>InspoBoard Boards Page</h1>
      </div>
      <div className="dropdown">
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className="selected-value">{value ? value.name : prompt}</div>
          <div className={`arrow ${open ? "open" : null}`} />
          <div className={`options ${open ? "open" : null}`}>
            {options.map((option) => (
              <div
                key={option.id}
                className={`${value === option ? "selected" : null}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                  getSelectedBoard(option.id);
                  // navigate("/boards/:boardID");
                }}
              >
                Title: {option.title} By: {option.owner}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="form">
        ⁺ 𓂋 𓈒 ♡Create Board ⁺ 𓂋 𓈒 ♡
        <form onSubmit={onFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={boardFormData.title}
            onChange={onTitleChange}
          />
          <hr />
          <label>Owner</label>
          <input
            type="text"
            value={boardFormData.owner}
            onChange={onOwnerChange}
          />
          <hr />
          <input type="submit" value="Add Board" className="form-button" />
        </form>
      </section>
    </div>
  );
};

BoardsPage.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default BoardsPage;
