"use strict";

let contactInformation = {
  name: "Mohammed Alam",
  address: "123 Steet",
  city: "Bronx",
  state:"NY",
  zip:"10452"
}

function printContactInformation(info){
  console.log(`
  ${info.name}
  ${info.address}
  ${info.city}, ${info.state} ${info.zip}`);
}

printContactInformation(contactInformation);
