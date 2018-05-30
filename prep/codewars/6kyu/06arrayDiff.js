// my solution
function array_diff(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++){
    if (b.indexOf(a[i])){
      result.push(a[i]);
    } 
  
  }
  return result;;
}

console.log(array_diff([1,2,2], [2]));

// solution I liked

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}