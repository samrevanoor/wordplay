import React, { useState } from "react";
import GuessBox from "../GuessBox/GuessBox";
import "./GuessBoxes.css";

const useGuessFields = () => {
  const numOfGuessFields = 5;
  const [guessValue, setGuessValue] = useState({
    letter1: "",
    letter2: "",
    letter3: "",
    letter4: "",
    letter5: "",
  });
  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [inputName, inputNum] = name.split("letter");

      if (value.length >= maxLength) {
        if (parseInt(inputNum) < numOfGuessFields) {
          const nextSibling = document.querySelector(
            `input[name=letter${parseInt(inputNum) + 1}]`
          );

          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setGuessValue({
        ...value,
        [`letter${name}`]: value,
      });
    },
  };
};

const GuessBoxes = ({ className }) => {
  const { handleChange } = useGuessFields();
  return (
    <>
      <GuessBox
        className={className}
        name={"letter1"}
        handleChange={handleChange}
      />
      <GuessBox
        className={className}
        name={"letter2"}
        handleChange={handleChange}
      />
      <GuessBox
        className={className}
        name={"letter3"}
        handleChange={handleChange}
      />
      <GuessBox
        className={className}
        name={"letter4"}
        handleChange={handleChange}
      />
      <GuessBox
        className={className}
        name={"letter5"}
        handleChange={handleChange}
      />
    </>
  );
};

export default GuessBoxes;
