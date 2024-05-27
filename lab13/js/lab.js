// index.js - purpose and description here
// Author: Alexander Chen (achen197@ucsc.edu)
// Date: May 26th

$(document).ready(function() {
  function fizzBuzz() {
    let oneLongString = '';

    for (let num = 1; num <= 200; num++) {
      let output = num + '';

      if (num % 3 === 0) output += 'Fizz!';
      if (num % 5 === 0) output += 'Buzz!';
      if (num % 7 === 0) output += 'Boom!';

      oneLongString += output + '<br>';
    }
    $('#output').html(oneLongString);
  }
  fizzBuzz();
})