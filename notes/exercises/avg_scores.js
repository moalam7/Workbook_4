"use strict";


let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores){
  let sum = 0;
  let numScores = scores.length;
  for (let i = 0; i < numScores; i++){
    sum += scores[i];
  }

  return sum / numScores;
}

console.log("my average score is " + getAverage(myScores).toFixed(2));

console.log("your average score is " + getAverage(yourScores).toFixed(2));
