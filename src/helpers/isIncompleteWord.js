export const isIncompleteWord = (guessArr) => {
  return guessArr.some((char) => char === undefined);
};
