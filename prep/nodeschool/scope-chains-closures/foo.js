// function foo() {
//   var bar;
// }

// function foo() {
//   var bar;
//   function zip(){
//     var quux;
//   }
// }

// function foo() {
//   var bar;
//   quux = 5;
//   function zip(){
//     var quux;
//   }
// }

function foo() {
  var bar;
  quux = 5;
  function zip(){
    var quux;
    bar = true;
  }
  return zip;
}