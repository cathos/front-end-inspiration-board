import React from "react";

import "./App.css";

const BoardForm = ({
  handleBoardsFormChange,
  formData,
  handleBoardFormSubmit,
}) => {
  let formElements = [
    {
      label: "Title:",
      key: "title",
    },
    {
      label: "Owner:",
      key: "owner",
    },
  ];

  return (
    <div>
      <form className="form">
        ⁺ 𓂋 𓈒 ♡Create Board ⁺ 𓂋 𓈒 ♡
        {formElements.map((formElement) => {
          return (
            <div className="form-inputs">
              {formElement.label}
              <input
                values={formData[formElement.key]}
                onChange={(e) => {
                  e.preventDefault();
                  handleBoardsFormChange(e.target.value, formElement.key);
                }}
              />
            </div>
          );
        })}
        <button className="form-button" onClick={handleBoardFormSubmit}>
          Add Board
        </button>
      </form>
    </div>
  );
};
export default BoardForm;
