"use strict";

//Section 1-1 JS Objects
//JS allows objects declared w values for each property

let emp1 = {
  //object = emp
  employeeId: "1", //property = employeeID,
  name: "Ezra", //value =  "Ezra"
  jobTitle: "Theater Teacher",
  payRate: 38.46,
};

//Whitespace is preferential
let emp2 = { employeeId: "2", name: "Elisha", jobTitle: "Game Programmer", payRate: 43.27 };

//Can access object properties in 2 ways:
//objectName.propertyName or
//objectName["propertyName"]

//  console.log("Employee 1: " + emp1.name);
//  console.log("Employee 1: " + emp2["name"]);

//Note: dot notation is much more common

//Objects can be passed into functions as parameters

function printEmployeeAndPay(emp) {
  console.log("Name: " + emp.name);
  console.log("Pay: " + emp.payRate);
}

// printEmployeeAndPay(emp1);
// printEmployeeAndPay(emp2);

//Objects can also be returned from function
//by packing several pieces of info

function createPayStub(id, name, payRate, hoursWorked) {
  let grossPay = 0;
  if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
  } else {
    grossPay = 40 * payRate + (((hoursWorked - 40) * 1.5) & payRate);
  }

  //Object being created in the function with properties being assigned parameter values of function and grossPay being assigned using the value from if statement
  let payStub = {
    employeeId: id,
    name: name,
    grossPay: grossPay,
  };
  return payStub;
}

let emp1PayStub = createPayStub("1", "Ezra", 38.46, 49);

// console.log(emp1PayStub.name + " earned $" +
//  emp1PayStub.grossPay.toFixed(2));

//*************************************************************************** */

//Section 2-1 Loop Basics

//Several types of loops, while loop, do while, for, for in, for each, etc
//While loop example
function whileLoop() {
  let num = 1;
  let i = 1;

  while (i < 5) {
    num *= 2;
    console.log(num);
    i++;
  }
}

// whileLoop();

//Output is, 2,4,8,16

//Do/while is the same thing except condition is checked at the bottom

function doWhileLoop() {
  let num = 1;
  let i = 1;

  do {
    num *= 2;
    console.log(num);
    i++;
  } while (i < 5);
}

// doWhileLoop();

//For loop, a "counting" loop, 3 parts sep by semicolons, code that executes before the loop runs, condition that must be true for the loop to continue executring, and code that runs at the bottom of each iteration
//Example

function forLoop() {
  let num = 1;

  //let i;
  //must assign variable in for loop in part 1 or outside of it
  for (let i = 0; i < 5; i++) {
    num = num * 2;
    console.log(num);
  }
}
// forLoop(); //output, 2,4,8,16,32

//Can always break out of a loop! It is useful when you're searching a list and find something, so you do not continue looping or searching

function breakingInWhileLoop() {
  let num = 1;
  let i = 1;

  while (i < 100) {
    num = num * 2;
    console.log(num);
    if (num >= 100) break;
    i++;
  }
}

// breakingInWhileLoop();

//********************************************* */

//Section 2-2 Arrays
//JS array is used to store multiple values in a single variable

let kids = ["Natalie", "Brittany", "Zachary"];
// console.log(kids);\

//Subscripts to access item's position in array, subscriptys are 0 based
let oldest = kids[0];
let middle = kids[1];
let youngest = kids[2];

//Can also use a variable as a subscript!
//Loops with arrays --> loop through this array
//arrayName.length to recieve length of array
//Best practice --> Store length of array in a variable if you use it in a loop
//Keeps the JS engine to have to recalculate the length each time

let numKids = kids.length;

function loopThroughArray() {
  for (let i = 0; i < numKids; i++) {
    console.log(kids[i]);
  }
}

// loopThroughArray();

//What can arrays hold? Numbers, objects, different data types

// an array that stores all numbers
let mileAgeLog = [313, 328, 349, 287, 301];

// an array that stores all dates
let importantDates = [new Date(1958, 8, 5), new Date(1976, 4, 30), new Date(2009, 9, 10)];

// an array that stores objects
let menu = [
  { item: "Hamburger", price: 6.95 },
  { item: "Cheeseburger", price: 7.95 },
  { item: "Hot dog", price: 4.95 },
];

let lunch = ["Steak fajitas", 9.95, "Sweet Tea", 2.79];

//In JS, you can pass and return arrays in functions

// returns an array of names
function getKids() {
  let kids = ["Natalie", "Brittany", "Zachary"];
  return kids;
}

// displays data in an array of names
function displayKids(kids) {
  let numKids = kids.length;
  for (let i = 0; i < numKids; i++) {
    console.log(kids[i]);
  }
}

let ourKids = getKids(); // returns an array
// displayKids(ourKids);     // pass an array

//Looping through an array of objects
//Must use subscript after the array name and then property name after subscript
function getMealCost(orders) {
  let sum = 0;

  let numOrders = orders.length;
  for (let i = 0; i < numOrders; i++) {
    sum += orders[i].price;
  }
  return sum;
}

let myOrder = [
  { item: "Chicken Tacos", price: 8.95 },
  { item: "Guacamole", price: 2.85 },
  { item: "Sweet Tea", price: 2.75 },
];

let yourOrder = [
  { item: "Hamburger", price: 6.95 },
  { item: "Fries", price: 2.25 },
  { item: "Sweet Tea", price: 2.75 },
  { item: "Fried Apple Pie", price: 4.95 },
];

let mealCost = getMealCost(myOrder);
let totalWithTip = mealCost * 1.2;
// console.log("My meal costs " + totalWithTip.toFixed(2));

mealCost = getMealCost(yourOrder);
totalWithTip = mealCost * 1.2;
// console.log("Your meal costs " + totalWithTip.toFixed(2));

//Expanding an Array
//Assign a value to an index number outside of the bounds of the array

let kids3 = ["Natalie", "Brittany", "Zachary"];
kids3[3] = "Brandon";
kids3[5] = "Christina";

// console.log(kids3);
// console.log(kids3[4]); //output is undefined

//Searching an Array
//indexOf() searches the array for an element and returns its position
//returns =1 if the item is not found

let teams = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"];

function findIndexOfTeam(teams, string) {
  let index = teams.indexOf(string);
  if (index == -1) {
    console.log("Item not found");
  } else {
    console.log("Item at position: " + index);
  }
}

// findIndexOfTeam(teams, "Rangers");
// findIndexOfTeam(teams, "White Sox");
// findIndexOfTeam(teams, "Yankees");

//If you pass a start position, indexOf() searches from that position rather than the start of the array

//code searches list from position 3
//let index = teams.indexOf("Rangers", 3);

//lastIndexOf() searches the array for an element starting at the end, also returns -1 if item not found

let firstIndex = teams.indexOf("Rangers"); // returns 1
let lastIndex = teams.lastIndexOf("Rangers"); // returns 5

//Array subsets 2-21
//Often search arrays to find a collection of elements that match a specifc condition
//Example
let menu1 = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
  { id: 2, item: "Burger", category: "Meal", price: 7.29 },
  { id: 3, item: "Salad", category: "Meal", price: 8.29 },
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

function getMenuItemsInCategory(menu1, category) {
  let matching = [];

  let numItems = menu1.length;
  for (let i = 0; i < numItems; i++) {
    if (menu1[i].category == category) {
      matching.push(menu1[i]);
    }
  }

  return matching;
}

// show all the drinks
let drinks = getMenuItemsInCategory(menu1, "Drink");
// let numDrinks = drinks.length;
// for(let i = 0; i < numDrinks; i++) {
//  console.log(drinks[i].item +
//  " $" + drinks[i].price.toFixed(2));
// }
