https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

function alphabetPosition(text) {
  var result = [];
  for (var i = 0; i < text.length; i++){
    var test = text.toUpperCase().charCodeAt(i);
    if(test >= 65 && test<=90) {
      result.push(test-64);
    }    
  }
  return result.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

