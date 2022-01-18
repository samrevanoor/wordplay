import React from "react";
import classnames from "classnames";
import "./GuessBox.css";

const GuessBox = ({ className, name, getInputValue, isCurrentGuess }) => {
  const onChangeInput = (event) => {
    console.log("onchangeinput", { event });
  };

  let value;
  if (isCurrentGuess) {
    value = getInputValue(name);
  }

  return (
    <>
      <input
        className={classnames("box", className)}
        inputMode="none"
        name={name}
        value={value}
        maxLength={1}
        onChange={onChangeInput}
        disabled={!isCurrentGuess}
      />
    </>
  );
};

export default GuessBox;
