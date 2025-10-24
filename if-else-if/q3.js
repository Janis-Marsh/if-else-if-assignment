// age 

const prompt = require('prompt-sync')();
let age = parseInt(prompt("Enter age "));

if (age<=12) {
   console.log("Child")
} else if (age<=19) {
    console.log("Teenager")
} else if (age<=59) {
    console.log("Adult")
} else if (age>=60) {
    console.log("Senior")
}