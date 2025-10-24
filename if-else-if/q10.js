// Credit score rating using IF-ELSE-IF

 const prompt = require('prompt-sync')();
let score = parseInt(prompt("Enter credit score "));

if (score >= 800) {
   console.log("Exceptional - Best rates available")
} else if (score >= 740) {
    console.log("Very Good - Better than average")
} else if (score >= 670) {
    console.log("Good - Near or above average")
} else if (score >= 580) {
    console.log("Fair - Below average")
} else if (score >= 300) {
    console.log("Poor - Credit may be denied")
}
else{
    console.log("invalid")
}