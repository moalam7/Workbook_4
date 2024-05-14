"use strict";

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

console.log(emp1PayStub.name + " earned $" +
 emp1PayStub.grossPay.toFixed(2));
