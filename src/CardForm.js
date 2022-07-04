import React from "react";
import { useState } from "react";
import "./App.css";

const CardForm = ({ addCardForm }) => {
  const [cardData, setFormData] = useState({});

  const submit = (e) => {
    e.preventDefault();
    addCardForm(cardData);
    alert(JSON.stringify(cardData));
  };

  let formElements = [
    {
      label: "Note:",
      key: "message",
    },
  ];

  const handleChange = (value, key) => {
    //set form data as key:value pair
    setFormData({ ...cardData, ...{ [key]: value } });
  };

  return (
    <div>
      <form className="form">
        ꒰ა ♡ ໒꒱ Create Card ✧･ﾟ: *✧･ﾟ:* 𓆩♡𓆪
        {formElements.map((formElement) => {
          return (
            <div className="form-inputs">
              {formElement.label}
              <input
                values={cardData[formElement.key]}
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e.target.value, formElement.key);
                }}
              />
            </div>
          );
        })}
        <button className="form-button" onClick={submit}>
          Add Card
        </button>
      </form>
    </div>
  );
};

export default CardForm;
