// my solution

const binaryArrayToNumber = arr => {
  // your code
  var total = 0;
  for (var i = arr.length-1, j = 1; i >= 0; i--){
    console.log(arr[i]);
    if (arr[i] == 1){
      total+=j;
      j*=2;
    } else {
      total+=0;
      j*=2;
    }
  }
  return total;
};

// solution I liked
const binaryArrayToNumber = arr => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}

