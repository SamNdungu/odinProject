// || (OR)
// The “OR” operator is represented with two vertical line symbols:
// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

// In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

// There are four possible logical combinations:

console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false


// If an operand is not a boolean, it’s converted to a boolean for the evaluation. For instance, the number 1 is treated as true, the number 0 as false:

if (1 || 0) { // works just like if( true || false )
  console.log('truthy!');
}

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true. For example:

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log("The office is closed!");
}

let hr = 12;
let isWeekend = true;

if (hr < 10 || hr > 18 || isWeekend) {
    console.log("You're late, the office is closed!");
}

// A chain of OR || returns the first truthy value or the last one if no truthy value is found. For instance:

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log( undefined || null || 0); // 0 (all falsy, returns the last value)


// Getting the first truthy value from a list of variables or expressions. For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values). Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder. If all variables were falsy, "Anonymous" would show up.


// Short-circuit evaluation: Another feature of OR || operator is the so-called “short-circuit” evaluation. It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument. The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.


true ||  console.log("not printed");
false || console.log("printed");

// In the first line below, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

