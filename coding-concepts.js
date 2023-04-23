// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))
console.log(colors);
// a) Your answer: 5
// b) Verify and explain: 5 was the output , what happened is that the .push command added "indigo"(our new string) to the array
// but it didn't logged the actual string. If you add a console.log(colors) in line 11 we will get the new array with
// the string "indigo" at the end of it, the command .push() adds one element to the last index of the array.
// output with line 11 added : [ 'tangerine', 'magenta', 'lilac', 'daffodil', 'indigo' ]

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10 . It will show us the value of the length of the string "LEARN 2023" , 
// quick note that the space between N and 2 is also considered in the length count. 
// An easier way to say it would be to say that it will show us how any characteres we
//  have in that whole string

// b) Verify and explain: 10 is the output , as expected it showed us the numeral value 
// of how many characteres we have in the mentioned string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o  // It is logging the index 4 of the string "Hello World", it is the lenght-1 in this
// Dev.Jr mind.
// b) Verify and explain: o is the output. This output was expected as explained in lines 36 and 37.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: JavaScript . 
// b) Verify and explain: Ruby is the ouput . In my mind I thought I counted the 0 1 in the index,
// forgot to count the 0 to the right index. You have 2 variables, and the variable languages is an array ,
// the variable index is a number. You have a log that is asking you what is the index of the other variable 
// using a variable to give you the number of the index . // observation: Hopefully with time I can express
// myself better when explaining the work done. 

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY, "SUNDAY"
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function //
// The `toUpperCase()` function is a method that can be called on strings, but `weekendDays`
// is an array. I don't know exactly how to do the capitalization of both strings, maybe make an
//  iteration?
 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: I haven't seen the `typeof` operator so I don't know what will happen.
// b) Verify and explain: `number` was the output given. After doing some research on the
// suggested websites at the syllabus (w3schools) I can say that `typeof` is an operator that
// is being used to find what type of data type the array `dataType` has, so `dataTypes.length`
// will give the number of elements in the array which is 4, and the operator `typeof` will return
// the data type of `dataTypes.length`. Which is a number, the final output then is `number`.
