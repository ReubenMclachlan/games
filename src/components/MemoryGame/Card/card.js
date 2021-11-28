import React from "react";
import classnames from "classnames";
import question from "./question.png";
import "./cardStyle.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={question} alt="question-mark" />
      </div>
      <div className="card-face card-back-face">
        <p>{card.type}</p>
      </div>
    </div>
  );
};

export default Card;
