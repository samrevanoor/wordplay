import React, { useState } from "react";
import GuessRow from "../GuessRow/GuessRow";

const GameBoard = () => {
  const word = "beans";
  console.log(word);

  const [currentTurn, setCurrentTurn] = useState(1);
  const handleNewTurn = () => {
    if (currentTurn < 6) {
      setCurrentTurn(currentTurn + 1);
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
      />
      <GuessRow
        number={2}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
      />
      <GuessRow
        number={3}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
      />
      <GuessRow
        number={4}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
      />
      <GuessRow
        number={5}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
      />
      <GuessRow
        number={6}
        currentTurn={currentTurn}
        handleNewTurn={handleNewTurn}
      />
    </div>
  );
};

export default GameBoard;
