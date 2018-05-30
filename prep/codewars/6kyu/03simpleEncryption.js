// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript

function encrypt(text, n) {
  var resultEven = [];
  var resultOdd = [];
  if (n < 1) {
    return text;
  } else if (text == null) {
    return null;
  }
  
  else {
      for (var i = 0; i < text.length; i++){

        if (i % 2 === 0){
          resultEven.push(text[i]);
        } else {
          resultOdd.push(text[i])
        }
      }
      result = resultOdd.join("") + resultEven.join("");
      return (encrypt(result, n-1));
    }
};


function decrypt(encryptedText, n) {


  if (n < 1){
    return encryptedText;
  } 
  
  else if (encryptedText == null) {
    return null;
  } 
  
  else if (encryptedText === ""){
    return "";
  } 
  

  
  else {
    var odds = encryptedText.slice(0, (encryptedText.length)/2);
    var evens = encryptedText.slice(encryptedText.length/2).split("");
    for (var i = 0, j = 0; i < encryptedText.length; i++){
      if (i % 2 !==0){
        evens.splice(i,0,odds[j])
        j++;
      }  
    }
  }
    result =  evens.join("");
    return (decrypt(result, n-1))
}
    

