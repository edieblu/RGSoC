//https://www.codewars.com/kata/the-supermarket-queue

function queueTime(customers, n) {
  //TODO
  var highest = customers[0];
  var total =[];
for (var i = 0; i < n; i++){
  total.push(customers[i])
}
for (var j = n, k=0; j < customers.length; j++){
  if (total[k] < total[k + 1]){
    total[k] = total[k] + customers[i];
  } else {
    total[k+1] = total[k+1] + customers[i];
  }
  if (k < total.length) {
    k++;
  } else {
    k = 0;
  }
}
return total;
  
}

console.log(queueTime([10,2,3,3], 2));
