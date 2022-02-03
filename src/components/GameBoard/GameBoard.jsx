import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import GuessRow from "../GuessRow/GuessRow";
import { words } from "../../words";
import confetti from "../../img1.gif";
import fantastic from "../../img2.gif";
import gotThereInTheEnd from "../../img4.gif";
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
  const [isInvalid, setIsInvalid] = useState(false);
  const [isAlmostLost, setIsAlmostLost] = useState(false);
  // const [charsInExactPos, setCharsInExactPos] = useState([]);
  // const [charsInWord, setCharsInWord] = useState([]);
  // const [charsNotInWord, setCharsNotInWord] = useState([]);

  // console.log({ word });

  const getInputValue = (inputName) => {
    return inputs[inputName] || "";
  };

  const handleSubmit = () => {
    const guessArr = [];
    for (let i = 1; i < 6; i++) {
      guessArr.push(Object.values(inputs[`letter${i}-${currentTurn}`]));
    }
    const guess = guessArr.join("");
    console.log({ guess });

    if (!words.includes(guess)) {
      setIsInvalid(true);
      setTimeout(() => {
        setIsInvalid(false);
      }, 2000);

      setInputName(`letter1-${currentTurn}`);

      setInputs((inputs) => ({
        ...inputs,
        [`letter1-${currentTurn}`]: "",
        [`letter2-${currentTurn}`]: "",
        [`letter3-${currentTurn}`]: "",
        [`letter4-${currentTurn}`]: "",
        [`letter5-${currentTurn}`]: "",
      }));
      return;
    }

    const guessBgColors = validateLetters(guess);
    const guessBgColorsObj = Object.fromEntries(guessBgColors);
    setNewBgColors((newBgColors) => ({
      ...newBgColors,
      ...guessBgColorsObj,
    }));
    if (guess !== word) {
      handleNewTurn();
      return;
    } else if (currentTurn === 6) {
      setIsAlmostLost(true);
      setIsWon(true);
    } else {
      setIsWon(true);
    }
  };

  const handleNewTurn = () => {
    if (currentTurn < 6) {
      setCurrentTurn(currentTurn + 1);
      setInputName(`letter1-${currentTurn + 1}`);
    } else {
      setIsLost(true);
      return;
    }
  };

  const validateLetters = (guess) => {
    const wordArray = word.split("");
    const guessArray = guess.split("");

    // const charsInExactPosTemp = [];
    // const charsInWordTemp = [];
    // const charsNotInWordTemp = [];

    const guessBgColors = guessArray.map((char, idx) => {
      if (char === wordArray[idx]) {
        const characterInExactPosition = [
          `letter${idx + 1}-${currentTurn}`,
          "#85c75a",
        ];
        // charsInExactPosTemp.push(char);
        return characterInExactPosition;
      } else if (wordArray.includes(char)) {
        const characterInWord = [`letter${idx + 1}-${currentTurn}`, "#ffd54a"];
        // charsInWordTemp.push(char);
        return characterInWord;
      } else {
        const characterNotInWord = [
          `letter${idx + 1}-${currentTurn}`,
          "#ff9c9c",
        ];
        // charsNotInWordTemp.push(char);
        return characterNotInWord;
      }
    });

    // console.log({ charsInExactPosTemp, charsInWordTemp, charsNotInWordTemp });

    //   setCharsInExactPos([...charsInExactPos, charsInExactPosTemp.join(" ")]);
    //   setCharsInWord(
    //     charsInWord.length
    //       ? [
    //           ...charsInWord[0]
    //             .split(" ")
    //             .filter(
    //               (x) =>
    //                 x !== charsInExactPosTemp.includes(x) ||
    //                 charsNotInWordTemp.includes(x)
    //             ),
    //           charsInWordTemp.join(" "),
    //         ]
    //       : [...charsInWordTemp.join(" ")]
    //   );
    //   setCharsNotInWord(
    //     charsNotInWord.length
    //       ? [
    //           ...charsNotInWord[0]
    //             .split(" ")
    //             .filter(
    //               (x) =>
    //                 x !== charsInExactPosTemp.includes(x) ||
    //                 charsInWordTemp.includes(x)
    //             ),
    //           charsNotInWordTemp.join(" "),
    //         ]
    //       : [...charsNotInWordTemp.join(" ")]
    //   );
    return guessBgColors;
  };

  // const getButtonTheme = () => {
  //   const buttonAttributes = [];

  //   if (charsInExactPos.length) {
  //     buttonAttributes.push({
  //       attribute: "style",
  //       value: "background: #85c75a",
  //       buttons: charsInExactPos.join(" "),
  //     });
  //   }

  //   if (charsInWord.length) {
  //     buttonAttributes.push({
  //       attribute: "style",
  //       value: "background: #ffd54a",
  //       buttons: charsInWord.join(" "),
  //     });
  //   }

  //   if (charsNotInWord.length) {
  //     buttonAttributes.push({
  //       attribute: "style",
  //       value: "background: #ff9c9c",
  //       buttons: charsNotInWord.join(" "),
  //     });
  //   }

  //   console.log({ charsInExactPos, charsInWord, charsNotInWord });

  //   return buttonAttributes;
  // };

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
    setIsAlmostLost(false);
    setWord(words[Math.floor(Math.random() * 1000)]);
  };

  return (
    <>
      <img
        src={confetti}
        alt="confetti"
        className={"confetti-image"}
        style={{ display: isWon && isAlmostLost ? "block" : "none" }}
      />
      <img
        src={fantastic}
        alt="fantastic!"
        className={"fantastic-image"}
        style={{ display: isWon && !isAlmostLost ? "block" : "none" }}
      />
      <img
        src={gotThereInTheEnd}
        alt="got there in the end!"
        className={"fantastic-image"}
        style={{ display: isWon && isAlmostLost ? "block" : "none" }}
      />
      <img
        src={sorry}
        alt="sorry :("
        className={"sorry-image"}
        style={{ display: isLost ? "block" : "none" }}
      />
      <h1
        className="word-list-warning"
        style={{ display: isInvalid ? "block" : "none" }}
      >
        not in word list!
      </h1>

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
              // buttonAttributes={getButtonTheme()}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
