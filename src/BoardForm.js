import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

//BoardForm accepts prop, addBoardForm, from App.js
const BoardForm = ({ addBoardForm }) => {
  const [formData, setFormData] = useState({});

  const submit = (e) => {
    e.preventDefault();
    addBoardForm(formData);
    alert(JSON.stringify(formData));
  };

  let formElements = [
    {
      label: "Title",
      key: "title",
    },
    {
      label: "Owner",
      key: "owner",
    },
  ];

  const handleChange = (value, key) => {
    //set form data as key:value pair
    setFormData({ ...formData, ...{ [key]: value } });
  };

  return (
    <div>
      <form className="form">
        Create Board ⁺ 𓂋 𓈒 ♡
        {formElements.map((formElement) => {
          return (
            <div className="form-inputs">
              {formElement.label}
              <input
                values={formData[formElement.key]}
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e.target.value, formElement.key);
                }}
              />
            </div>
          );
        })}
        <button className="form-button" onClick={submit}>
          Add Board
        </button>
      </form>
    </div>
  );
};
export default BoardForm;
