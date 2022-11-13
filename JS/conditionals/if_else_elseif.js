// The if Statement - Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
if (new Date().getHours() < 23) {
    greeting = "Good day";
}
console.log(greeting);

// The else Statement - Use the else statement to specify a block of code to be executed if the condition is false.

if (new Date().getHours() < 18) {
    greeting1 = "Nice day";
} else {
    greeting1 = "Good evening";
}
console.log(greeting1)

// The else if Statement - Use the else if statement to specify a new condition if the first condition is false. Example
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
const time = new Date().getHours();

if (time < 10) {
    greeting2 = "Good morning";
} else if (time < 20) {
    greeting2 = "Good day";
} else {
    greeting2 = "Good evening";
}
console.log(greeting2);

