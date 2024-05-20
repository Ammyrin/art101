// index.js - purpose and description here
// Author: Alexander Chen (achen197@ucsc.edu)
// Date: May 19th

$(document).ready(function() {
  
  // Sorts the characters of a string in alphabetical order.
  function sortString(inputString) {
    
    //We have to covert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }

  //click listener for button
  $("#submit").click(function() {
    
    //get value of input field
    const userName = $("#username").val();

    //now let's sort it
    const userNameSorted = sortString(userName);

    //append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

  });
});