const name = "Sam";
const greetings = `Hello, ${name}`;
console.log(greetings)


// Alternatively, You can use the same technique to join together two variables:

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined)

// You can also concatenate strings using the + operator:
const greeting = "Hello";
const name1 = "Samuel";
console.log(greeting + ", " + name1);

// However, template literals usually give you more readable code:

const greet = "Hello";
const name2 = "John";
console.log(`${greet}, ${name2}`);
