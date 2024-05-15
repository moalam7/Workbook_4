"use strict";

//create an array of numbers to store test scores
//define a myScores variable
//assign the array into the myScores variable
let myScores = [92, 98, 84, 76, 89, 99, 100];

//define a function getAverage
//the function should accept an array named scores as a parameter
function getAverage(scores) {
  //define a variable named total and assign it an initial value of 0
  let total = 0;

  //for loop
  //1. code that executes before the loop begins
  //2. is the condition that must be true in order for the loop to keep executing
  //3. code that runs at the bottom of each iteration through the loop
  // i++; is the same as i= i + 1;
  //   ---- 1---;---2--------------;--3--
  for (let i = 0; i < scores.length; i++) {
    //scores[i] is scores[0] then scores[1] then scores[2]
    //scores[1] is one of the test scores (a number)
    //total += scores[i] is the same as total = total + scores[i]
    total += scores[i];
  }
  //to get an average score, add all scores together (total the scores) and divide by the number of scores (scores.length)
  //return the average score you calculated
  return total / scores.length;
}

//define a variable to hold the average score: let myAverage
//              call the getAverage function and pass it the array of scores stored in the myScores variable on the first line
// catch the average score in the myAverage variable being returned from the getAverage function
//  myAverage   <---------------------
let myAverage = getAverage(myScores);
//display/print out the string "My average score is:" and concatenate the average score which is stored in the variable myAverage
console.log("My average score is:" + myAverage);
