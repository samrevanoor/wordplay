import React from "react";
import classnames from "classnames";
import "./GuessBox.css";

const GuessBox = ({ className, name, handleChange }) => {
  return (
    <input
      className={classnames("box", className)}
      name={name}
      maxLength={1}
      onChange={handleChange}
    />
  );
};

export default GuessBox;
