// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



// Solution 1
function vowels(str) {
  const vowels = "aeiou";
  let count = 0;
    // you could also use st.includes(char), or arr.includes(char)
  for (let char of str.toLowerCase()){
    if (vowels.indexOf(char) !== -1){
      count++
    }
  }
  return count;

}
console.log(vowels("Why do you ask?"));

// Solution 2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ?  matches.length : 0;
}
console.log(vowels("Why do you ask?"));

module.exports = vowels;
