"use strict";

let students = [
  {name: "Zephaniah", scores: [100, 96, 99, 92]},
  {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
  {name: "Siddalee", scores: [86, 72, 92]},
  {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
  {name: "Elisha", scores: [89, 100]},
  {name: "Ezra", scores: [100, 99, 100, 87]}
];

// Loop through each student
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let sum = 0;
  // Loop through each score of the student
  for (let j = 0; j < student.scores.length; j++) {
      sum += student.scores[j];
  }
  // Calculate the average score
  let averageScore = sum / student.scores.length;
  console.log(`${student.name}'s average score is ${averageScore.toFixed(2)}.`);
}
