"use strict";

let products = [
  {product: "Gummy Worms", price: 5.79},
  {product: "Plain M&Ms", price: 2.89},
  {product: "Peanut M&Ms", price: 2.89},
  {product: "Swedish Fish", price: 3.79},

 // TODO: fill the array with 10 candies of various
// price ranges
];

// Which candies costs less than $4.00?


// for (const product of products){
//   if(product.price < 4.00){
//     console.log(`${product.product} costs less than $4.00.`);
//   }
// }

// Which candies has "M&M" its name?

// for (const product of products){
//   if (product.product.includes("M&M")){
//     console.log(`${product.product} includes "M&M" in its name!`);
//   }
// }

// Do we carry "Swedish Fish"?

for (const product of products){
  if (product.product.includes("Swedish Fish")){
    console.log(`${product.product} is carried!`);
  }
}
