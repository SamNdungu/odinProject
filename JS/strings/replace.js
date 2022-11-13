// The replace() method replaces a specified value with another value in a string.

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

console.log(newText);

// The replace() method does not change the string it is called on.

// The replace() method returns a new string.


// The replace() method replaces only the first match. Example:
let text1 = "Please visit Microsoft and Microsoft!";
let newText1 = text1.replace("Microsoft", "W3Schools"); // replaces only the first match.

console.log(newText1); // Please visit W3Schools and Microsoft!

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work. Example:

let text2 = "Please visit Microsoft!";
let newText2 = text2.replace("MICROSOFT", "W3Schools");

console.log(newText2); // Returns, Please visit Microsoft!


// To replace case insensitive, use a regular expression with an /i flag (insensitive). Example:
let text3 = "Please visit Microsoft!";
let newText3 = text3.replace(/MICROSOFT/i, "W3Schools");

console.log(newText3); // Returns, Please visit W3Schools!


// To replace all matches, use a regular expression with a /g flag (global match). Example:
let text4 = "Please visit Microsoft and Microsoft!";
// Regular expressions are written without quotes.
let newText4 = text4.replace(/Microsoft/g, "W3Schools");

console.log(newText4); // Returns, Please visit W3Schools and W3Schools!
