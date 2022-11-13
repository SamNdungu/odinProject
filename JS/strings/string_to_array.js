// JavaScript String split() - A string can be converted to an array with the split() method:
let text = "a,b,c,d,e,f";
const myArray = text.split(",");

console.log(myArray);


// If the separator is omitted, the returned array will contain the whole string in index [0] . If the separator is "", the returned array will be an array of single characters:
let txt = "Hello";
const myArray1 = txt.split("");

txt = "";

for (let i = 0; i < myArray1.length; i++) {
    txt +=  myArray1[i] + "<br>"
}

console.log(myArray1);