// let lunch = [
//   { item: "Steak Fajitas", price: 9.95 },
//   { item: "Chips and Guacamole", price: 5.25 },
//   { item: "Sweet Tea", price: 2.79 },
// ];
// function total(item) {
//   let subTotal = 0;
//   for (let index = 0; index < item.length; index += 1) {
//     subTotal += item[index].price;
//   }
//   return subTotal;
// }
// let totalLunchCost = total(lunch);
// console.log("Total cost of lunch item " + totalLunchCost);

// let taxRate = 8 / 100;

// function totalWithTax(item, taxRate) {
//   let totalCost = totalLunchCost(item);

//   let taxAmount = subTotal * taxRate;
//   return subTotal + taxAmount;
// }
//  let totalLunchCostWithTax = totalWithTax(item, taxRate);
//     console.log(totalLunchCostWithTax);

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function total(items) {
  let subTotal = 0;
  for (let index = 0; index < items.length; index += 1) {
    subTotal += items[index].price;
  }
  return subTotal;
}

let totalLunchCost = total(lunch);
console.log("Total cost of lunch items: $" + totalLunchCost.toFixed(2));

let taxRate = 8 / 100;

function totalWithTax(items, taxRate) {
  let totalCost = total(items);
  let taxAmount = totalCost * taxRate;
  return totalCost + taxAmount;
}

let totalLunchCostWithTax = totalWithTax(lunch, taxRate);
console.log("Total cost of lunch items with tax: $" + totalLunchCostWithTax.toFixed(2));
