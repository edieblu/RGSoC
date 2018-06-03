// my solution
function towerBuilder(nFloors) {
  // build here
  var result = [];
  var floor = "*";
  var space = " ";

  if (nFloors === 1){
    result.push("*");
  } else {
    for (var i = 0, j = 1; i < nFloors; i++, j+=2){
      if (i === nFloors-1){
        result.push(floor.repeat(j));
      } else {
        result.push(space.repeat((nFloors-1)-i) + floor.repeat(j) + space.repeat((nFloors-1)-i));
      }
    }  
  }
  return result;
}

console.log(towerBuilder(4));


// solution I liked

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}