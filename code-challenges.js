// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.



// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

//Quick Note >>>>>>>> To make things easier , input will be called `Inp`,output as `Op` and `console.log` as `log`. 

// Pseudo code:
// Inp: Two strings.
// Op: String that has more characters.
// Process:
// Create a function named biggestFruit
// Create two strings called string1, string2
// Determine how many characters is in each string // try the method .length
// Return string1 if it has more characters than string2
// Return the opposite if its string2 // probably using conditionals

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// const biggestFruit = (string1, string2) => {
//     if (string1.length > string2.length)
//     return  fruit1
//     else {
//         return fruit2
//     }
// }
// console.log(biggestFruit(fruit1, fruit2));

// Expected outcome: "banana"
// op: banana

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"
// const biggestFruit = (string1, string2) => {
//     if (string1.length > string2.length)
//     return  fruit3
//     else {
//         return fruit4
//     }
// }
// console.log(biggestFruit(fruit3, fruit4));
// Op: cherry.

// -1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
// Quick Note >>>>>>>> To make things easier , input will be called `Inp`,output as `Op` and `console.log` as `log`. 
// Pseudo code:
// 
// Inp: Three boiling points , two parameters temp1 and boilingPoint.
// Op: Show what's the temperature and in what category that temperature is.
// Process:
// Create a function named `tempStatus`
// Create two parameters one named `temperature1` and the other named `boilingPoint`
// Store those 2 parameters in the named const and make conditionals statements, using also the return 
// to give the value after the invokation.
// Log the temperature value and use string concatenation to create the expected op.
// I will pseudocode only this section for the 1st temperature to save some time,for the other temperatures, where 
// I have the const `temperature1` it will be replaced by `temperature2`and so on in the code structure.
// 
// 
// const temperature1 = 42 ;
// const boilingPoint = 212 ;

// const tempStatus = (temperature1,boilingPoint) => {
//     if (temperature1 > boilingPoint) {
//     return " above boiling point"
//     } else if (temperature1 === boilingPoint) {
//       return  " at boiling point"
//     } else {
//       return  " below boiling point"
//     }
// }

// console.log(temperature1 + " is " + tempStatus(temperature1,boilingPoint));
// 
// Expected output: "42 is below boiling point"
// Op: 42is below boiling point  >> tweaked the code by adding 1 space in each side of the string "is" .
// Commented the code for the next challenge.

// const temperature2 = 350 ;
// const boilingPoint = 212 ;

// const tempStatus = (temperature2,boilingPoint) => {
//     if (temperature2 > boilingPoint) {
//     return " above boiling point"
//     } else if (temperature2 === boilingPoint) {
//       return  " at boiling point"
//     } else {
//       return  " below boiling point"
//     }
// }
// console.log(temperature2 + " is " + tempStatus(temperature2,boilingPoint));
// Expected output: "350 is above boiling point"
// op: "350 is below boiling point" >> tweaked the code and added the parameter `boilingPoint` to the log , so the op is the expected one.
// Commented the code for the next challenge.
// Quick Note >>>>>>>> To make things easier , input will be called `Inp`,output as `Op` and `console.log` as `log`. 
// const temperature3 = 212 ;
// const boilingPoint = 212 ;

// const tempStatus = (temperature3,boilingPoint) => {
//     if (temperature3 > boilingPoint) {
//     return " above boiling point"
//     } else if (temperature3 === boilingPoint) {
//       return  " at boiling point"
//     } else {
//       return  " below boiling point"
//     }
// }
// console.log(temperature3 + " is " + tempStatus(temperature3,boilingPoint));
// Expected output: "212 is at boiling point".
// op: "212 is at boiling point".
// Commented the code for the next challenge.

// --2) Create the code that will combine the two arrays and return the length using the test variables provided below.
// Quick Note >>>>>>>> To make things easier , input will be called `Inp`,output as `Op` and `console.log` as `log`. 
// Pseudo code:
// 
// Inp: Create another array containing the 2 arrays we already have.
// Op: Return the length of the combined arrays.
// process:
// Create an array named `wComb`.
// Create a const named `wCombLength`.
// Use the method .length on the new cons. 
// Log the new cons.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
// const padres1998WorldSeriesRuns = [6, 3, 5, 3];

// const wComb = [padres1984WorldSeriesRuns , padres1998WorldSeriesRuns];
// const combLength = [wComb.length];
// console.log(combLength);
// Expected output: 9
// Op: [2] was the output I got, I tried to modify the code and still can't make it work, I will inquire about this challenge to one of the instructors whenever I get the chance.
// Commented the code for the next challenge.

// ---3) Create the code that will reverse the letters of a string using the test variable provided below.
// Pseudo code:
// Quick Note >>>>>>>> To make things easier , input will be called `Inp`,output as `Op` and `console.log` as `log`. 
// Inp: Reverse string
// Op: Variable with its letters written backwards.
// 
// Process:
// Create a const named `revCohort`.
// Use the .split method to convert the string into an array of characters, use .reverse method to reverse 
// the order of the characteres in the string and then use the .join method to convert the reversed array back to a string.
//
// const currentCohort = "Charlie 2023";
// const revCohort = currentCohort.split("").reverse().join("");
// console.log(revCohort);
// Expected output: "3202 eilrahC".
// op : "3202 eilrahC".
// Commented the code for the next challenge.

// ----4) Create the code that will return the last index of the given value from the array using the test variables provided below.
// Pseudo code:
// Quick Note >>>>>>>> To make things easier , input will be called `Inp`,output as `Op` and `console.log` as `log`. 
// Inp: New const.
// Op: Last index number of the given value in the array.
// Process:
// Create a cons named `theValue`.
// Use the method .lastIndexOf.
// Log the cons created.

// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// const theValue = numberOfConnections.lastIndexOf(42);
// console.log(theValue);
// Expected output: 7
// Op: 7 .
// Commented the code for the next challenge.

// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue2 = 10
// const theValue = numberOfConnections.lastIndexOf(10)
// console.log(theValue);
// Expected output: 8
// Op: 8 . 
// Commented the code for the next challenge.

// -----5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.
// Pseudo code:
// Quick Note >>>>>>>> To make things easier , input will be called `Inp`,output as `Op` and `console.log` as `log`. 
// Inp: 
// Op: array sorted from largest to smallest.
// Process:
// Use the sort method to sort the numbers in the array.
// Find the right function to make the sort method function properly.
// Log sanDiegoSummerTemperatures.
// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// sanDiegoSummerTemperatures.sort((a,b) => b - a);
// console.log(sanDiegoSummerTemperatures);
// Expected output: [82, 80, 79, 77, 76, 73, 72]
// Op:[82, 80, 79, 77, 76, 73, 72]
// Commented the code for the next challenge.

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
const sanDiegoWinteremperatures = [79, 80, 72, 73, 82, 77, 76]
sanDiegoWinterTemperatures.sort((a,b) => b - a);
console.log(sanDiegoWinterTemperatures);
// Expected output: [68, 67, 66, 66, 62, 59, 59]
// Op:[68, 67, 66, 66, 62, 59, 59]