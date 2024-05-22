"use strict";

let lunch = [
  {item: "Steak Fajitas", price: 9.95},
  {item: "Chips and Guacamole", price: 5.25},
  {item: "Sweet Tea", price: 2.79}
];

function getTotalOrder(order){
  let subTotal = 0;
  let numItems = order.length;
  for (let i = 0; i < numItems; i++){
    subTotal += order[i].price;
  }

  return subTotal;
}

let myLunchSubTotal = getTotalOrder(lunch);
let myLunchTotal = (getTotalOrder(lunch) * 1.26).toFixed(2);

console.log(`My subtotal for lunch is ${myLunchSubTotal} and my total including tax and tip is ${myLunchTotal}`);
