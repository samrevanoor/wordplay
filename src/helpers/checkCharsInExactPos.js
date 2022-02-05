export function checkCharsInExactPos(
  charsInExactPos,
  charsInExactPosTemp,
  charsInWrongPosTemp
) {
  if (!charsInExactPos.length && !charsInExactPosTemp.length) return [];
  if (!charsInExactPos.length) return [...charsInExactPosTemp];

  var charsInExactPosStr = charsInExactPos.join(" ");

  charsInWrongPosTemp.forEach((char) => {
    if (charsInExactPosStr.includes(char)) {
      charsInExactPosStr = charsInExactPosStr.replaceAll(char, "");
    }
  });

  const charsInExactPosNew = charsInExactPosStr.split(" ");

  if (!charsInExactPosTemp.length) return charsInExactPosNew;
  return [charsInExactPosNew.join(" "), ...charsInExactPosTemp];
}
