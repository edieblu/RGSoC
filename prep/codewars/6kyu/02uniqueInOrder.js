// my soluion

var uniqueInOrder=function(iterable){

  var result = [];
  for (var i = 0; i < iterable.length; i++){
    if (iterable[i] != iterable[i+1]){
      result.push(iterable[i])
    } 
  }
  return result;
}

// solution I liked
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}