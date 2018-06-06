// https://www.codewars.com/kata/find-the-missing-letter/train/javascript

function findMissingLetter(array) {
  var str = array.join("");
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1){
      return String.fromCharCode(str.charCodeAt(i)-1)
    }
  }
}
console.log(findMissingLetter(['a','b','c','d','f']));