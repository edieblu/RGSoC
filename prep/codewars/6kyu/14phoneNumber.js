// https://www.codewars.com/kata/create-phone-number/train/javascript

// my solution
function createPhoneNumber(numbers){
  var firstBit = numbers.slice(0,3).join("");
  var secondBit = numbers.slice(3,6).join("");
  var thirdBit = numbers.slice(6).join("");
  return "(" + firstBit + ") " + secondBit + "-" + thirdBit;;
  
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// solution I liked

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}