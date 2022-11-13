// We make a grading app which would take a number score and convert it to a letter grade, with the following requirements.

// Grade of 90 and above is an A
// Grade of 80 to 89 is a B
// Grade of 70 to 79 is a C
// Grade of 60 to 69 is a D
// Grade of 59 or below is an F

// Now we can write that as a switch statement. Since we’re checking a range, we will perform the operation in each case to check if each expression is evaluating to true then break out of the statement once the requirements for true have been satisfied.


const prompt = require('prompt-sync')();
// Set the students grade.
const grade = prompt("Enter the marks:\n");

switch(true) {

    // If score is 90 or higher
    case grade >= 90:
        console.log("A");
        break;

    // If score is 80 or higher
    case grade >= 80:
        console.log("B");
        break;

    // If score is 70or higher
    case grade >= 70:
        console.log("C");
        break;
        
    // If score is 60 or higher
    case grade >= 60:
        console.log("D");
        break;
        
    // If score is anything less than 59
    default:
        console.log("F");    

}