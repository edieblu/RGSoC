// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const mapper = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    mapper[char] = mapper[char] + 1 | 1;
    // if (!mapper[char]){
    //   mapper[char] = 1;
    // } else {
    //   mapper[char]++;
    // }
  }
  for (let char in mapper) {
    if (mapper[char] > max) {
      max = mapper[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
