import React, { useState } from "react";
import PropTypes from "prop-types";

const Board = ({ options, prompt, value, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">{value ? value.name : prompt}</div>
        <div className={`arrow ${open ? "open" : null}`} />
        <div className={`options ${open ? "open" : null}`}>
          {options.map((option) => (
            <div
              className={`${value === option} ? "selected" : null}`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              Title: {option.title} By: {option.owner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
