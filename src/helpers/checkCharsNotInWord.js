export function checkCharsNotInWord(charsNotInWord, charsNotInWordTemp) {
  if (!charsNotInWord.length && !charsNotInWordTemp.length) return [];
  if (!charsNotInWord.length) return [...charsNotInWordTemp];
  if (!charsNotInWordTemp.length) return charsNotInWord;
  return [charsNotInWord.join(" "), ...charsNotInWordTemp];
}
