// index.js - purpose and description here
// Author: Alexander Chen (achen197@ucsc.edu)
// Date: April 29th

// Constants

// Functions
myTransport = ["Honda Civic", "Bike", "Train", "Bus"];

myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Blue",
  year: 2022,
  age: function() {
    return 2024 - this.year;
  }
}
document.writeln("Transportation I Use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre");
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
