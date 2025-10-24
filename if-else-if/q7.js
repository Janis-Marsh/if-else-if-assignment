// Water state classifer

const prompt = require('prompt-sync')();
let temp = parseInt(prompt("Enter temperature (celsius) "));

if (temp<0) {
   console.log("Ice (Solid)")
} else if (temp<=99) {
    console.log("Water (Liquid)")
} else if (temp>=100) {
    console.log("Steam (Gas)")
} 