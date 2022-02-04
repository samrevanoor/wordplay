import React from "react";
import classnames from "classnames";
import "./GuessBox.css";

const GuessBox = ({
  className,
  name,
  getInputValue,
  isCurrentGuess,
  bgColor,
}) => {
  const onChangeInput = (event) => {};

  return (
    <>
      <input
        className={classnames("box", className)}
        inputMode="none"
        name={name}
        value={getInputValue(name)}
        maxLength={1}
        onChange={onChangeInput}
        disabled={!isCurrentGuess}
        style={{ backgroundColor: bgColor }}
      />
    </>
  );
};

export default GuessBox;
