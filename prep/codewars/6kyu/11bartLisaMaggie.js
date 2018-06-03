// my solution
function list(names){
  //your code here
  var result = "";
  if (names.length === 0){
    return result;
  }
  else {
    for (var i = 0; i < names.length; i++){
      for (var prop in names[i]){
        if (i === names.length-2){
          result+= (names[i][prop]) + " & "
        } else if (i === names.length -1){
          result+= (names[i][prop]);
        } else {
          result+= (names[i][prop]) + ", ";
        }
        
      }
    }
    return result;
  }

}

console.log(list([{name: "Bart"} ]));

// solution I liked

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }