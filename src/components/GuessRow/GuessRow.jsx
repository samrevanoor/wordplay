import React from "react";
import classnames from "classnames";
import GuessBoxes from "../GuessBoxes/GuessBoxes";
import "./GuessRow.css";

const GuessRow = ({ number, currentTurn, handleNewTurn }) => {
  const isCurrentGuess = number === currentTurn;

  const handleSubmit = () => {
    handleNewTurn();
  };

  return (
    <div className="guess-row">
      <GuessBoxes
        className={classnames("guess-boxes", isCurrentGuess && "current-guess")}
      />
    </div>
  );
};

export default GuessRow;
