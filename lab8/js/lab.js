/*
* Author: Alexander Chen <achen197@ucsc.edu>
* Created: May 6th
* License: Public Domain
*/

let numbersArray = [7, 9, 15, -8, 900, 3000, 65];

function Multiplication(x) {
  let result = x * 2;
  return result;
}

//Testing Function//
console.log(Multiplication(9));
console.log(Multiplication(-8));

let mapResults1 = numbersArray.map(Multiplication);
console.log("Results 1:", mapResults1);

let mapResults2 = numbersArray.map(function(x) {
  let result = x * x;
  return result;
});
console.log("Results 2:", mapResults2);