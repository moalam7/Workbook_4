"use strict"; //this puts us into a stricter mode of JavaScript, where variables need to be declared with let or const

//create a variable named myInfo
// assign into the variable an object literal (object)
// create mutliple properties to describe the object
//separate each with a trailing comma ,
//seperate the property name from the property value with a colon :
let myInfo = {
  name: "Kendrick Lamar",
  address: "131 Lennox Ave",
  city: "Bronx",
  state: "New York",
  zip: "10460",
};

//create a function
//syntax: function keyword, followed by function name, followed by parenthesis () which will hold any parameters
// then finally a code block using curly braces {} defines the body of the function which is a block of code
//any steps you want to take or tasks you want completed in the function should be inside the curly braces
function printContact(contact) {
  console.log(contact.name); //saying contact dot name is called dot notation, it is how you access the data in the properties of the object
  console.log(contact.address); //each call to the console.log() function creates a new line
  console.log(contact.city + ",", contact.state, contact.zip); //console.log accepts multiple parameters and logs each on the same line
}

function printContact1(contact) {
  console.log(`
  ${contact.name}
  ${contact.address}
  ${contact.city}, ${contact.state} ${contact.zip}
  `);
}

//lastly, above we have just defined the function (the stesp/tasks that need to be taken)
//in order for them to happen we need to call the function
//you call a function using its name followed by parenthesis ()
printContact1(myInfo);
