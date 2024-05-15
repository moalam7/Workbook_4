"use strict";

//Section 1-1 JS Objects
//JS allows objects declared w values for each property

let emp1 = {         //object = emp
  employeeId: "1", //property = employeeID,
  name: "Ezra",     //value =  "Ezra"
  jobTitle: "Theater Teacher",
  payRate: 38.46
}

//Whitespace is preferential
let emp2 = { employeeId: "2", name: "Elisha",jobTitle: "Game Programmer", payRate: 43.27 };

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

function createPayStub(id, name, payRate, hoursWorked){
  let grossPay = 0;
  if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
  } else {
    grossPay = (40 * payRate) + ((hoursWorked - 40) * 1.5  & payRate)
  }

  //Object being created in the function with properties being assigned parameter values of function and grossPay being assigned using the value from if statement
  let payStub = {
    employeeId: id,
    name: name,
    grossPay: grossPay
  };
  return payStub
}

let emp1PayStub = createPayStub("1", "Ezra", 38.46, 49);

// console.log(emp1PayStub.name + " earned $" +
//  emp1PayStub.grossPay.toFixed(2));

//*************************************************************************** */

//Section 2-1 Loop Basics

//Several types of loops, while loop, do while, for, for in, for each, etc
//While loop example
function whileLoop(){
  let num = 1;
  let i = 1;

  while(i<5){
    num *= 2;
    console.log(num);
    i++;
  }
}

// whileLoop();

//Output is, 2,4,8,16

//Do/while is the same thing except condition is checked at the bottom

function doWhileLoop(){
  let num = 1;
  let i = 1;

  do{
    num *= 2;
    console.log(num);
    i++;
  } while (i<5)
}

// doWhileLoop();

//For loop, a "counting" loop, 3 parts sep by semicolons, code that executes before the loop runs, condition that must be true for the loop to continue executring, and code that runs at the bottom of each iteration
//Example

function forLoop(){
  let num = 1;

  //let i;
  //must assign variable in for loop in part 1 or outside of it
  for (let i=0; i<5; i++){
    num=num*2;
    console.log(num);
  }
}
// forLoop(); //output, 2,4,8,16,32

//Can always break out of a loop! It is useful when you're searching a list and find something, so you do not continue looping or searching

function breakingInWhileLoop(){
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
