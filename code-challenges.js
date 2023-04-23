// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.



// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

//Quick Note >>>>>>>> To make things easier , input will be called `inp`,output as `op` and `console.log` as `clog`. //

// Pseudo code:
// inp: two strings
// op: string that has more characters
// process:
// create a function named biggestFruit
// create two strings called string1, string2
// determine how many characters is in each string // try the method .length
// return string1 if it has more characters than string2
// return the opposite if its string2 // probably using conditionals

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
// op: cherry.

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// 
// inp:
// op: show what's the temperature and in what category that temperature is(bbp,bp or abp)
// process:
// create a function named `tempStatus`
// create two parameters one named `temperature1` and the other named `boilingPoint`
// store those 2 parameters in the named const and make conditionals statements, using also the return 
// to give the value after the invokation.
// clog the temperature value and use string concatenation to create the expected op.
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
// commented the codes so i could do the next temperature.
// Expected output: "42 is below boiling point"
// op: 42is below boiling point  >> tweaked the code by adding 1 space in each side of the string "is" .
// fixed op: 42 is below boiling point. 

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

// const temperature3 = 212
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
// console.log(temperature3 + " is " + tempStatus(temperature3,boilingPoint))
// Expected output: "212 is at boiling point"
// op: "212 is at boiling point"
// commented the codes above to continue doing the exercise without having code conflicts.

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// 
// inp: 
// op:
// process:
// 
// 
// 
// 
// 
// 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
