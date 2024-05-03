// index.js - purpose and description here
// Author: Alexander Chen (achen197@ucsc.edu)
// Date: May 3rd

// Constants

// Functions
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// getUserName - a function which takes the user's inputed name and sorts the letters
function getUserName() {
  var userName = window.prompt("Enter your name:");
  console.log("userName =", userName);

  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  // Sorting array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // Joining array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// Calling the function and displaying results
var sortedName = getUserName();
document.writeln("Name sorted: ", sortedName, "<br>");