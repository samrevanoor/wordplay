import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import GuessRow from "../GuessRow/GuessRow";
import { words } from "../../words";
import confetti from "../../img1.gif";
import fantastic from "../../img2.gif";
import sorry from "../../img5.gif";
import "./GameBoard.css";

const GameBoard = () => {
  const keyboard = useRef();

  const [word, setWord] = useState(words[Math.floor(Math.random() * 1000)]);
  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState("letter1-1");
  const [currentTurn, setCurrentTurn] = useState(1);
  const [newBgColors, setNewBgColors] = useState({});
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);

  console.log(word);

  const getInputValue = (inputName) => {
    return inputs[inputName] || "";
  };

  const handleSubmit = () => {
    const guess = Object.values(inputs).join("").substring(0, 5);
    console.log({ guess });

    const guessBgColors = validateLetters(guess);
    const guessBgColorsObj = Object.fromEntries(guessBgColors);
    setNewBgColors((newBgColors) => ({
      ...newBgColors,
      ...guessBgColorsObj,
    }));
    if (guess !== word) {
      handleNewTurn();
      return;
    } else {
      setIsWon(true);
    }
  };

  const handleNewTurn = () => {
    if (currentTurn < 6) {
      setCurrentTurn(currentTurn + 1);
      setInputName(`letter1-${currentTurn + 1}`);
      setInputs({});
    } else {
      setIsLost(true);
      return;
    }
  };

  const validateLetters = (guess) => {
    const wordArray = word.split("");
    const guessArray = guess.split("");
    return guessArray.map((char, idx) => {
      if (char === wordArray[idx]) {
        const characterInExactPosition = [
          `letter${idx + 1}-${currentTurn}`,
          "#85c75a",
        ];
        return characterInExactPosition;
      } else if (wordArray.includes(char)) {
        const characterInWord = [`letter${idx + 1}-${currentTurn}`, "#ffd54a"];
        return characterInWord;
      } else {
        const characterNotInWord = [
          `letter${idx + 1}-${currentTurn}`,
          "#ff9c9c",
        ];
        return characterNotInWord;
      }
    });
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

  const resetClick = (event) => {
    setInputs({});
    setInputName("letter1-1");
    setCurrentTurn(1);
    setNewBgColors({});
    setIsWon(false);
    setIsLost(false);
    setWord(words[Math.floor(Math.random() * 1000)]);
  };

  return (
    <>
      <img
        src={confetti}
        alt="confetti"
        className={"confetti-image"}
        style={{ display: isWon ? "block" : "none" }}
      />
      <img
        src={fantastic}
        alt="nice job!"
        className={"nice-job-image"}
        style={{ display: isWon ? "block" : "none" }}
      />
      <img
        src={sorry}
        alt="sorry :("
        className={"sorry-image"}
        style={{ display: isLost ? "block" : "none" }}
      />
      <div>
        <div style={{ opacity: isWon || isLost ? 0.5 : 1, marginLeft: "5px" }}>
          <GuessRow
            number={1}
            currentTurn={currentTurn}
            getInputValue={getInputValue}
            newBgColors={newBgColors}
          />
          <GuessRow
            number={2}
            currentTurn={currentTurn}
            getInputValue={getInputValue}
            newBgColors={newBgColors}
          />
          <GuessRow
            number={3}
            currentTurn={currentTurn}
            getInputValue={getInputValue}
            newBgColors={newBgColors}
          />
          <GuessRow
            number={4}
            currentTurn={currentTurn}
            getInputValue={getInputValue}
            newBgColors={newBgColors}
          />
          <GuessRow
            number={5}
            currentTurn={currentTurn}
            getInputValue={getInputValue}
            newBgColors={newBgColors}
          />
          <GuessRow
            number={6}
            currentTurn={currentTurn}
            getInputValue={getInputValue}
            newBgColors={newBgColors}
          />
        </div>
        <div>
          {isWon || isLost ? (
            <button className="button" onClick={resetClick}>
              play again
            </button>
          ) : (
            <Keyboard
              layout={{
                default: [
                  "q w e r t y u i o p",
                  "a s d f g h j k l",
                  "{enter} z x c v b n m {bksp}",
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
          )}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
