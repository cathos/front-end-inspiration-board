import React from "react";
import { useState } from "react";
import "./App.css";

//API CONSIDERATIONS

//user clicks addCard on SelectedBoard which has the same id as board/BoardForm
//user fills out CardForm which calls API POST to post card
//API POST associates Card id with CardForm id which is associated with the Board/BoardForm id
//card id does not get rendered
//card id is only used for card actions: toggleLikes, deletecard

const CardForm = ({ addCardForm, setCardHidden }) => {
  //state of cardForm
  const [cardData, setFormData] = useState({});

  const cardFormSubmit = (e) => {
    e.preventDefault();
    addCardForm(cardData);
    setCardHidden(false);
    alert(JSON.stringify(cardData));
  };

  let formElements = [
    {
      label: "Note:",
      key: "message",
    },
  ];

  const handleCardFormChange = (value, key) => {
    //set form data as key:value pair
    setFormData({ ...cardData, ...{ [key]: value } });
  };

  return (
    <div className="form">
      <form>
        ꒰ა ♡ ໒꒱ Create Card ✧･ﾟ: *✧･ﾟ:* 𓆩♡𓆪
        {formElements.map((formElement) => {
          return (
            <div className="form-inputs">
              {formElement.label}
              <input
                values={cardData[formElement.key]}
                onChange={(e) => {
                  e.preventDefault();
                  handleCardFormChange(e.target.value, formElement.key);
                }}
              />
            </div>
          );
        })}
        <button className="form-button" onClick={cardFormSubmit}>
          Add Card
        </button>
      </form>
    </div>
  );
};

export default CardForm;
