// length property

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZZ';
let length = text.length;

console.log(length);

// Extracting String Parts: There are 3 methods for extracting a part of a string:

// 1. slice(start, end)

let str1 = "Apple, Banana, Kiwi";
let part_str1 = str1.slice(7, 13); // Slicing from position 7 to position 13 (13 not included):
let part_str2 = part_str1.slice(-12, -6); // If a parameter is negative, the position is counted from the end of the string.
let part_str3 = str1.slice(7); // slice out the rest of the string.
let part_str4 = str1.slice(-12); // counting from the end:


console.log(part_str1);
console.log(part_str2);
console.log(part_str3);
console.log(part_str4);

// 2. substring(start, end)

// substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

let str2 = "Apple, Banana, Kiwi";
let part1 = str2.substring(7, 13);
let part2 = str2.substring(7); // If you omit the second parameter, substring() will slice out the rest of the string.

console.log(part1);
console.log(part2);


// 3. substr(start, length)
//  substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

let str3 = "Guava, Ovacados, Melons";
let part3 = str3.substr(7, 8); // Ovacados

console.log(part3);

// If you omit the second parameter, substr() will slice out the rest of the string.

let str4 = "Guava, Ovacados, Melons";
let part4 = str4.substr(7); // Ovacados, Melons

console.log(part4);


// If the first parameter is negative, the position counts from the end of the string.

let str5 = "Guava, Ovacados, Melons";
let part5 = str5.substr(-6); // Melons

console.log(part5);
