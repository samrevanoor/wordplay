export function checkCharsInWrongPos(
  charsInWrongPos,
  charsInWrongPosTemp,
  charsInExactPosTemp
) {
  if (!charsInWrongPos.length && !charsInWrongPosTemp.length) return [];
  if (!charsInWrongPos.length) {
    return [...charsInWrongPosTemp];
  }

  var charsInWrongPosStr = charsInWrongPos.join(" ");

  charsInExactPosTemp.forEach((char) => {
    if (charsInWrongPosStr.includes(char)) {
      charsInWrongPosStr = charsInWrongPosStr.replaceAll(char, "");
    }
  });

  const charsInWrongPosNew = charsInWrongPosStr.split(" ");

  if (!charsInWrongPosTemp.length) return charsInWrongPosNew;
  return [charsInWrongPosNew.join(" "), ...charsInWrongPosTemp];
}
