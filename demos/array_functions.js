// returns an array of names
function getKids() {
  let kids = ["Natalie", "Brittany", "Zachary"];
  return kids;
 }

 // displays data in an array of names
function displayKids(kids) {
  let numKids = kids.length;
  for(let i = 0; i < numKids; i++) {
  console.log(kids[i]);
  }
 }

 let ourKids = getKids(); // returns an array
displayKids(ourKids); // pass an array
