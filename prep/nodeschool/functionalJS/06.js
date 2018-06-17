function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(acc, word){
    if (!acc[word]) acc[word] = 1;
    else acc[word]++
    return acc;
  }, {})
  return result;
}

module.exports = countWords

