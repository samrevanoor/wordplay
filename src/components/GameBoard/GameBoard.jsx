import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import GuessRow from "../GuessRow/GuessRow";

const GameBoard = () => {
  const word = "beans";
  const keyboard = useRef();

  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState("letter1-1");
  const [currentTurn, setCurrentTurn] = useState(1);

  const getInputValue = (inputName) => {
    return inputs[inputName] || "";
  };

  const handleSubmit = () => {
    const guess = Object.values(inputs).join("").substring(0, 5);
    console.log({ guess });
    if (guess === word) {
      console.log("winner!");
    } else {
      validateLetters(guess);
      handleNewTurn();
      console.log(currentTurn + 1);
    }
  };

  const onKeyPress = (key, event) => {
    if (key === "{enter}") {
      handleSubmit();
      return;
    }
    if (key !== "{bksp}") {
      const letterNum = inputName.split("letter")[1][0];
      setInputs((inputs) => ({
        ...inputs,
        [inputName]: event.target.textContent,
      }));
      if (parseInt(letterNum) < 6) {
        setInputName(`letter${parseInt(letterNum) + 1}-${currentTurn}`);
      }
      return;
    }
    if (key === "{bksp}") {
      const letterNum = inputName.split("letter")[1][0];

      setInputName(`letter${parseInt(letterNum) - 1}-${currentTurn}`);

      setInputs((inputs) => ({
        ...inputs,
        [`letter${parseInt(letterNum) - 1}-${currentTurn}`]: "",
      }));
    }
  };

  const validateLetters = (guess) => {
    const wordArray = word.split("");
    const guessArray = guess.split("");
    console.log({ wordArray, guessArray });
  };

  const handleNewTurn = () => {
    if (currentTurn < 6) {
      setCurrentTurn(currentTurn + 1);
      setInputName(`letter1-${currentTurn + 1}`);
      setInputs({});
    } else {
      return;
    }
  };

  return (
    <div>
      <GuessRow
        number={1}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
        getInputValue={getInputValue}
      />
      <GuessRow
        number={2}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
        getInputValue={getInputValue}
      />
      <GuessRow
        number={3}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
        getInputValue={getInputValue}
      />
      <GuessRow
        number={4}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
        getInputValue={getInputValue}
      />
      <GuessRow
        number={5}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
        getInputValue={getInputValue}
      />
      <GuessRow
        number={6}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
        getInputValue={getInputValue}
      />
      <Keyboard
        layout={{
          default: [
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "{bksp} z x c v b n m {enter}",
          ],
        }}
        display={{
          "{bksp}": "back",
          "{enter}": "submit",
        }}
        keyboardRef={(r) => (keyboard.current = r)}
        inputName={inputName}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default GameBoard;
