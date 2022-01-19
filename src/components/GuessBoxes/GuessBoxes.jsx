import React from "react";
import GuessBox from "../GuessBox/GuessBox";
import "./GuessBoxes.css";

const GuessBoxes = ({
  className,
  getInputValue,
  isCurrentGuess,
  number,
  newBgColors,
}) => {
  const isBgColor = (letterNum) => {
    if (newBgColors[`${letterNum}-${number}`]) {
      return newBgColors[`${letterNum}-${number}`];
    } else {
      return "";
    }
  };

  return (
    <>
      <GuessBox
        className={className}
        name={`letter1-${number}`}
        getInputValue={getInputValue}
        isCurrentGuess={isCurrentGuess}
        bgColor={isBgColor("letter1")}
      />
      <GuessBox
        className={className}
        name={`letter2-${number}`}
        getInputValue={getInputValue}
        isCurrentGuess={isCurrentGuess}
        bgColor={isBgColor("letter2")}
      />
      <GuessBox
        className={className}
        name={`letter3-${number}`}
        getInputValue={getInputValue}
        isCurrentGuess={isCurrentGuess}
        bgColor={isBgColor("letter3")}
      />
      <GuessBox
        className={className}
        name={`letter4-${number}`}
        getInputValue={getInputValue}
        isCurrentGuess={isCurrentGuess}
        bgColor={isBgColor("letter4")}
      />
      <GuessBox
        className={className}
        name={`letter5-${number}`}
        getInputValue={getInputValue}
        isCurrentGuess={isCurrentGuess}
        bgColor={isBgColor("letter5")}
      />
    </>
  );
};

export default GuessBoxes;
