// https://www.codewars.com/kata/vasya-clerk/train/javascript

// my solution

function tickets(peopleInLine){
  // bills: 100, 50, 25
  var change = 0;
  var change50 = 0;
  var change100 = 0;
  for (var i = 0; i < peopleInLine.length; i++){
    
    if (peopleInLine[i] == 25){
      change++;
    } else if (peopleInLine[i] == 50){
      if (change){
        change50++;
        change--; 
      }else {
        return "NO";
      }
    } else {
      if (change50 && change){
        change100++;
        change50--;
        change--;
      } else if (change >=3){
        change100++
        change-=3;
      } else {
        return "NO";
      }
      
    }
  }
  return "YES"
}

console.log(tickets([25,25,25,100,25,50,25,100,25,25,50,100]));


