
function divisors(integer) {
  var result = [];
  for (var i = 2; i < integer; i++){
    if (integer % i ==0){
      result.push(i);
    }
  } 
  return result.length ===0 ?  integer + " is prime":  result;
  
};

