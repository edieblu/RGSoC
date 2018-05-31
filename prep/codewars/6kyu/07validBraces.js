// https://www.codewars.com/kata/valid-braces/train/javascript
// my solution
function validBraces(braces){
  debugger
  if (braces.length <= 1){
    return false;
  }
  var matchingOpeningBracket = [];
  var stack = [];
  var openingBrackets = ['[', '{', '(']
  var closingBrackets = [']', '}', ')']

  for (var i = 0; i < braces.length; i++){
    // if braces[i] is a closing bracket
    if (closingBrackets.indexOf(braces[i])!== -1){
      // find a matching opening bracket
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(braces[i])];
      // the matching opening bracket should be the last item pushed on stack (unless stack is empty)
      if (stack.length === 0 || (stack.pop()!== matchingOpeningBracket)){
        return false;
      }
    } else {
      // push opening bracket to stack
      stack.push(braces[i])
    }
  }
  return stack.length === 0;
}

console.log(validBraces("([{}])"));

// solution I liked
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}