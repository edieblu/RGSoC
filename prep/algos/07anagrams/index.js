// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
function anagrams(stringA, stringB) {
  const aCharpMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharpMap).length !== Object.keys(bCharMap).length){
    return false;
  }
  for (let char in aCharpMap) {
    if (aCharpMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str){
  const charMap = {};
  str = str.replace(/[^\w]/g, "").toLowerCase();
  for (let char of str){
   charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));

// Solution 2
function anagrams(stringA, stringB) {
  function strip(str){
    str = str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    return str;
  }
  return strip(stringA) === strip(stringB);
}

module.exports = anagrams;
