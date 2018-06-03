// https://www.codewars.com/kata/are-they-the-same 
function comp(array1, array2){
  if (!array1 || !array2){
    return false;
  } else {
    for (var i = 0; i < array1.length; i++){
      var multi = array1[i] * array1[i];
      var index = array2.indexOf(multi)
      if (index ==-1){
        return false;
      } else {
        array2.splice(index,1)
      }
    }
    return true;
  }
  
}
console.log(comp(null, null));