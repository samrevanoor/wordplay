import React from "react";
import classnames from "classnames";
import GuessBoxes from "../GuessBoxes/GuessBoxes";
import "./GuessRow.css";

const GuessRow = ({ number, currentTurn, getInputValue, newBgColors }) => {
  const isCurrentGuess = number === currentTurn;

  return (
    <div className="guess-row">
      <GuessBoxes
        className={classnames("guess-boxes", isCurrentGuess && "current-guess")}
        getInputValue={getInputValue}
        isCurrentGuess={isCurrentGuess}
        number={number}
        newBgColors={newBgColors}
      />
    </div>
  );
};

export default GuessRow;
