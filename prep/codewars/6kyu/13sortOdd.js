// https://www.codewars.com/kata/sort-the-odd/train/javascript

function sortArray(array) {
  // Return a sorted array.
  var odd = array
  .filter(num => {return num % 2 != 0;})
  .sort((a,b) => {
    return a-b;
  })
  for (var i = 0, j = 0; i < array.length; i++){
    if (array[i] % 2 !==0){
      array.splice(i,1,odd[j]);
      j++
    }
  }
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));