// Income Tax Calculator

const prompt = require('prompt-sync')();
let income = parseInt(prompt("Enter annual income "));

if (income<=10000) {
   console.log("No tax")
} else if (income<=30000) {
    console.log("10%")
} else if (income<=60000) {
    console.log("20%")
} else if (income<=100000) {
    console.log("30%")
} else if (income>100000) {
    console.log("40%")
} 