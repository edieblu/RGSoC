function chessboard(n) {
  var odd = ("# ").repeat(n/2);
  var even = ( " #").repeat(n/2);

  for (var i = 0; i < n; i++){
    if (i % 2 !== 0) {
      console.log(odd)
    } else {
      console.log(even);
    }
  }
}

console.log(chessboard(8))