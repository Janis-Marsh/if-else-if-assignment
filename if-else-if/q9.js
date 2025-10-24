// Blood pressure classification using IF-ELSE-IF

const prompt = require('prompt-sync')();
let systolic = parseInt(prompt("Enter Systolic "));
let diastolic = parseInt(prompt("Enter Diastolic "));

if (systolic < 120 && diastolic < 80) {
   console.log("Normal")
} else if (systolic <= 129 && diastolic < 80) {
    console.log("Elevated")
} else if (systolic <=139 || diastolic <= 89) {
    console.log("High BP stage 1")
} else if (systolic <=180 || diastolic <= 120) {
    console.log("High BP stage 2")
} else if (systolic > 180 || diastolic > 120) {
    console.log("Hypertensive Crisis")
}