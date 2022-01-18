import React from "react";
import classnames from "classnames";
import GuessBoxes from "../GuessBoxes/GuessBoxes";
import "./GuessRow.css";

const GuessRow = ({
  number,
  currentTurn,
  handleNewTurn,
  getInputValue,
  onInputFocus,
}) => {
  const isCurrentGuess = number === currentTurn;

  return (
    <div className="guess-row">
      <GuessBoxes
        className={classnames("guess-boxes", isCurrentGuess && "current-guess")}
        getInputValue={getInputValue}
        onInputFocus={onInputFocus}
        isCurrentGuess={isCurrentGuess}
        number={number}
      />
    </div>
  );
};

export default GuessRow;
