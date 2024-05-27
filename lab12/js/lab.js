// index.js - purpose and description here
// Author: Alexander Chen (achen197@ucsc.edu)
// Date: May 23th

function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;

  if (mod === 0) {
      return "Gryffindor";
  } else if (mod === 1) {
      return "Ravenclaw";
  } else if (mod === 2) {
      return "Slytherin";
  } else {
      return "Hufflepuff";
  }
}

document.getElementById('button').addEventListener('click', function() {
  let name = document.getElementById('input').value;
  let house = sortingHat(name);
  let newParagraph = document.createElement('p');
  newParagraph.textContent = "The Sorting Hat has sorted you into " + house;
  document.getElementById('output').appendChild(newParagraph);
});