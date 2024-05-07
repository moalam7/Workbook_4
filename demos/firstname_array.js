"use strict";

let firstNames = ["Mo", "Bo", "Po", "To"];

// console.log(firstNames);
// console.log(firstNames[1]);

let kids = ["Natalie", "Brittany", "Zachary"];

let oldest = kids[0];
let middle = kids[1];
let youngest = kids[2];

// each time thru the loop kids[i] references a different
// element in the array

for(let i = 0; i < 3; i++) {
  console.log(kids[i]);
}

let kids2 = ["Natalie", "Brittany", "Zachary"];

for(let i = 0; i < kids.length; i++) {
 console.log(kids2[i]);
}


//best practice, so you're not recalculating length of array through each iteration!
let kids3 = ["Natalie", "Brittany", "Zachary"];

let numKids = kids3.length;
for(let i = 0; i < numKids; i++) {
 console.log(kids3[i]);
}
