import React, { useState } from "react";
import PropTypes from "prop-types";

const BoardsPage = ({ options, prompt, value, onChange, getSelectedBoard }) => {
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
                className={`${value === option} ? "selected" : null}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                  getSelectedBoard(option.id);
                }}
              >
                Title: {option.title} By: {option.owner}
              </div>
            ))}
          </div>
        </div>
      </div>
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
