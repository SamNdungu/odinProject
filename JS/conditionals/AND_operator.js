// The AND operator is represented with two ampersands &&: In classical programming, AND returns true if both operands are truthy and false otherwise:

console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false

// An example with if:
let hour = 22;
let minute = 30;

if (hour == 22 && minute == 30) {
  console.log('The time is 22:33');
}

// Just as with OR, any value is allowed as an operand of AND:

if (1 && 0) { // evaluated as true && false
  console.log("won't work, because the result is falsy");
}

// if the first operand is truthy, AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy, AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0

// We can also pass several values in a row. See how the first falsy one is returned:

console.log( 1 && 2 && null && 3 ); // null