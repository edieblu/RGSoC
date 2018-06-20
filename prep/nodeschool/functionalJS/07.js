function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  // base case
  if (!arr.length) return;
  else {
  // recursion case
  }
}

module.exports = reduce

function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(acc, word){
    if (!acc[word]) acc[word] = 1;
    else acc[word]++
    return acc;
  }, {})
  return result;
}

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}