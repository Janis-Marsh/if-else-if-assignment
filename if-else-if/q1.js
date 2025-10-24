// 

const prompt = require('prompt-sync')();
let temp = parseInt(prompt("Enter temperature (Celsius) "));

if (temp>30) {
   console.log("Hot")
} else if (temp>=20) {
    console.log("Warm")
} else if (temp>=10) {
    console.log("Cool")
} else {
    console.log("Cold")
}