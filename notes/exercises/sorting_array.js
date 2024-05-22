"use strict";

function compareAscendingNumber(a, b) {
  if (a < b) {return -1;} // right order
  else if (a == b) {return 0;} // same values
  else {return 1;} // swap, wrong order
}
let numbers = [3, 27, 400, 1, 111, 5];
numbers.sort(compareAscendingNumber);
// Results: 1, 3, 5, 27, 111, 400

console.log(numbers);
