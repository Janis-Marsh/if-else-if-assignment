// Bmi

const prompt = require('prompt-sync')();
let BMI = parseInt(prompt("Enter BMI "));

if (BMI<18.5) {
   console.log("Underweight")
} else if (BMI<=24.9) {
    console.log("Normal weight")
} else if (BMI<=29.9) {
    console.log("Overweight")
} else if (BMI>=30) {
    console.log("Obese")
} 