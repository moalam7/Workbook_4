"use strict";

// content before :
function getSupplierCode(partCode) {
  const positionOfColon = partCode.indexOf(":");
  return partCode.substring(0, positionOfColon);
}

//content between : and -
function getProductNumber(partCode) {
  const positionOfColon = partCode.indexOf(":");
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfColon + 1, positionOfHyphen);
}

//content after -
function getSize(partCode) {
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfHyphen + 1);
}

function parsePartCode(partCode) {
    //call other functions to recieve info
    let supplierCode = getSupplierCode(partCode);
    let productNumber = getProductNumber(partCode);
    let size = getSize(partCode);
    //define object from this information
    let partCodeObject = {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size
    }
    return partCodeObject;
}

const partCode1 = "ACME:123-L";
const partCode2 = "DI:12345-M";
const partCode3 = "ACE:1-12";

let returnedObject = parsePartCode(partCode1);
console.log(`
Supplier: ${returnedObject.supplierCode}
Product Number: ${returnedObject.productNumber}
Size: ${returnedObject.size}`);
