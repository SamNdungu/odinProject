// JavaScript String padStart() - pads a string with another string,

let text = "5";
let padded = text.padStart(4, "x");

console.log(padded);

// NB - The padStart() method is a string method. To pad a number, convert the number to a string first.

let num = 5;
let txt = num.toString();
let padded1 = txt.padStart(4, "0");

console.log(padded1);


// JavaScript String padEnd() - adds a string with another string at the end of a string.
let text1 = "5";
let padded2 = text1.padEnd(4,"x");

console.log(padded2);

// The padEnd() method is a string method. To pad a number, convert the number to a string first.

let number = 6;
let text2 = number.toString();
let padded3 = text2.padEnd(4, 0);

console.log(padded3);