var mySentence = prompt("write a sentence."); //comes back from prompt input: Toast Output TT
console.log(mySentence)

var first = mySentence.charAt(0); //first char, T
console.log(first);
var last = mySentence.charAt(mySentence.length-1); //0 based index, 5 -1 =4, T
console.log(last);

function middle(){
  return mySentence.slice(1, 4);
}

function newString(){
 return(first.toUpperCase() + last.toUpperCase());
}
alert(newString(mySentence));

function reverseString (){
  var firstAndLast = newString();
  return firstAndLast.charAt(1) + firstAndLast.charAt(0);
}

function solution(){
  var x = reverseString(mySentence)

}

alert(reverseString(mySentence) + middle(mySentence));

// function newString(mySentence){
//   var first = mySentence.charAt(0);
//   var last = mySentence.charAt(mySentence.length-1);
//   var solution = first.toUpperCase() + last.toUpperCase();
//   return solution.split("").reverse().join("");
// }

// alert (mySentence + newString);






//
// var twoStrings = function (mySentence, newString){
//   return reverseString + mySentence;
// };
//
// alert (twoStrings)
 //       -------

 // var twostrings = function(first,last){
 //   return last.toUpperCase() + first.toUpperCase()
 // }
 //
 // alert (twoStrings(first, last));
// mysentence + reverseString
