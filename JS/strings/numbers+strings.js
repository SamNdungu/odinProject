const name = "Front ";
const num = 242;

console.log(`${name}${num}`);

name_num  = `${name}${num}`;
console.log(typeof(name_num));

// The Number object - converts anything passed to it into a number, if it can.

const myString = "123";
const myNum = Number(myString);
console.log(typeof(myNum));

// Conversely, every number has a method called toString() that converts it to the equivalent string.

const myNum2 = 123;
const myString2 = myNum2.toString();

console.log(typeof(myString2));

