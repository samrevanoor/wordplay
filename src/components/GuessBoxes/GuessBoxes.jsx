import React from "react";
import GuessBox from "../GuessBox/GuessBox";
import "./GuessBoxes.css";

const GuessBoxes = ({
  className,
  getInputValue,
  onInputFocus,
  isCurrentGuess,
  number,
}) => {
  return (
    <>
      <GuessBox
        className={className}
        name={`letter1-${number}`}
        getInputValue={getInputValue}
        onInputFocus={onInputFocus}
        isCurrentGuess={isCurrentGuess}
      />
      <GuessBox
        className={className}
        name={`letter2-${number}`}
        getInputValue={getInputValue}
        onInputFocus={onInputFocus}
        isCurrentGuess={isCurrentGuess}
      />
      <GuessBox
        className={className}
        name={`letter3-${number}`}
        getInputValue={getInputValue}
        onInputFocus={onInputFocus}
        isCurrentGuess={isCurrentGuess}
      />
      <GuessBox
        className={className}
        name={`letter4-${number}`}
        getInputValue={getInputValue}
        onInputFocus={onInputFocus}
        isCurrentGuess={isCurrentGuess}
      />
      <GuessBox
        className={className}
        name={`letter5-${number}`}
        getInputValue={getInputValue}
        onInputFocus={onInputFocus}
        isCurrentGuess={isCurrentGuess}
      />
    </>
  );
};

export default GuessBoxes;
