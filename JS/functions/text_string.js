// Built-in browser functions

// We've used functions built in to the browser a lot in this course.

// Every time we manipulated a text string, for example:

const myText = "I am a string";
const newString =myText.replace("string", "Sausage");

console.log(newString);

// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

// Or every time we manipulated an array:
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');

console.log(myArray);
console.log(madeAString);

// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

// Or every time we generate a random number:

const myNumber = Math.random();

console.log(myNumber);
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number