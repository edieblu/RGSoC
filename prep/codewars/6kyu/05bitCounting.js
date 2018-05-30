// my solution

var countBits = function(n) {
  // Program Me
  var bin = n.toString(2).split("");
  return bin.filter(function(num){
    return num == 1;
  }).reduce(function(a,b){
    return Number(a)+ Number(b);
  },0)
};

console.log(countBits(5));


// solution I liked

countBits = n => n.toString(2).split('0').join('').length;
