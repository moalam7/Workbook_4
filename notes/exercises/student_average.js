"use strict";

let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

let students2 = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

function getScoreAverage(students){

  let numStudents = students.length;

  //Loop through each student
  for (let i = 0; i < numStudents; i++){
    let student = students[i]; //to determine current student we are dealing with
    let numScores = student.scores.length;
    let sum = 0;

    //Loop through score of each student
    for(let j = 0; j < numScores; j++){
      sum += student.scores[j];
    }

    //Calculate average
    let averageScore = sum / numScores;
    console.log(`Student ${students[i].name} has an average score of ${averageScore.toFixed(2)}`);
  }
}


getScoreAverage(students);
getScoreAverage(students2);
