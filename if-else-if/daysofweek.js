// write js to find the day of the week

const prompt = require('prompt-sync')();
let day = parseInt(prompt("Enter day of the week as number "))
let result =""
if ( day===1) {
    result = "Sunday"
    console.log("The day of the week is " + result)
}
else if ( day===2) {
    result = "Monday"
    console.log("The day of the week is " + result)
}
else if ( day===3) {
    result = "Tuesday"
    console.log("The day of the week is " + result)
}
else if ( day===4) {
    result = "Wednesday"
    console.log("The day of the week is " + result)
}
else if ( day===5) {
    result = "Thursday"
    console.log("The day of the week is " + result)
}
else if ( day===6) {
    result = "Friday"
    console.log("The day of the week is " + result)
}
else if ( day===7) {
    result = "Saturday"
    console.log("The day of the week is " + result)
}
else{
    console.log("Invalid day")
}

