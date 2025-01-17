// Here’s a detailed task list divided into small chunks that will help learners build a foundational understanding of JavaScript. Each task focuses on solving a specific piece of functionality. Once they master these, they can mix and match these chunks to solve most problems.

// *********************************************************************************************************************************

// 1. Basic Console Usage
// 	•	Print a message to the console.
// 	•	Log the result of a mathematical operation (2 + 2).
// 	•	Log a variable’s value and track changes using console.log().


// console.log("Hello World");
// console.log(2 + 2);


// ********************************************************************************************************************************

// 2. Variables and Data Types
// 	•	Declare a variable using let and const.
// 	•	Assign and reassign a value to a variable.
// 	•	Determine the type of a variable using typeof.


// let name = "Siddharth";
// const age = 15;

// let msg = "hello";
// msg = "hiii"

// console.log(typeof msg);


// ********************************************************************************************************************************


// 3. Loops
// 	•	Create a for loop to print numbers from 1 to 10.
// 	•	Create a while loop to count down from 10 to 1.
// 	•	Use a for...of loop to iterate over an array of names.


// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }


// for(let i = 10; i > 0; i--){
//     console.log(i);
// }


// let i = 10
// while (i > 0) {
//     console.log(i);
//     i--;
// }



// let arr = [1, 2, "hello", 4, 5];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// let arr = ["sid", "sumit", "kunal", "abhi"];
// for(const i of arr){
//     console.log(i)
//     // console.log(i === "sumit");
// }



// ********************************************************************************************************************************


// 4. Arrays
// 	•	Create an array with 5 elements and log it.
// 	•	Add a new element to the end of an array (.push()).
// 	•	Remove the last element from an array (.pop()).
// 	•	Iterate over an array and print each element.
// 	•	Find the length of an array.


// let arr = [1, 3, 5, 6, 8];
// arr.forEach(function(elem){
//     console.log(elem);
// });


// let arr = [1, 3, 5, 6, 8];
// arr.push(7);
// console.log(arr)


// let arr = [1, 3, 5, 6, 8];
// arr.pop();
// console.log(arr)


// let arr = ["sid", 1, 2, 5, 6, "sumit", 10];
// arr.forEach(function(elem){
//     console.log(elem);
// });


// let arr = ["sid", 1, 2, 5, 6, "sumit", 10];
// console.log(arr.length)


// ********************************************************************************************************************************


// 5. Functions
// 	•	Create a function to add two numbers and return the result.
// 	•	Write a function that accepts a string and returns its uppercase version.
// 	•	Create a function to calculate the area of a rectangle.


// function add(){
//     let a = 10;
//     let b = 5;
//     return a+b;
// }
// let result = add();
// console.log(result)



// function convert(str) {
//     return str.toUpperCase;
// }
// let res = convert("hello");
// console.log(res);



// function areaOfTriangle(l, b) {
//     return 2 * (l + b);
// }
// let res = areaOfTriangle(2, 4);
// console.log(res)




// ********************************************************************************************************************************


// 6. Conditionals
// 	•	Write an if statement to check if a number is positive or negative.
// 	•	Use if...else if to classify a grade as “A”, “B”, or “Fail”.
// 	•	Create a switch case for selecting a fruit price.



// let num = 10
// if (typeof num === 'number') {
//     if (num >= 0) {
//         console.log("Positve");
//     } else {
//         console.log("Negative");
//     }
// }else{
//     console.log("Please enter a number");
// }


// let marks = 20;
// if (marks >= 60) {
//     console.log("Grade - A")
// } else if (marks >= 30 && marks < 60) {
//     console.log("Grade - B")
// } else{
//     console.log("Fail")
// }

// let fruitsName = "mango";
// switch (fruitsName) {
//     case 'mango':
//         console.log("Mango is Rs.50 per Kg.");
//         break;
//     case 'Apple':
//         console.log("Apple is Rs.100 per Kg.");
//         break;
//     default:
//         console.log("Please a fruit name");
// }



// ********************************************************************************************************************************



// 7. Object Basics
// 	•	Create an object to store information about a car (e.g., make, model, year).
// 	•	Access and log the value of a property using dot notation.
// 	•	Add a new property to an existing object.

// const obj1 = {};
// const obj2 = new Object();

// let car = {
//     model : "Lambo",
//     year : 2025
// }

// car.speed = "300 Km/h";
// console.log(car)



// ********************************************************************************************************************************


// 8. String Manipulation
// 	•	Concatenate two strings.
// 	•	Extract the first 5 characters of a string (.slice()).
// 	•	Replace a word in a string using .replace().


// console.log("a" + "b");


// let str = "hellooo";
// let res = str.slice(0, 5);
// console.log(res);








// ********************************************************************************************************************************


// 9. Event Handling (Basic DOM Interaction)
// 	•	Create a button and log a message when it is clicked.
// 	•	Change the background color of a div on a mouseover event.
// 	•	Toggle a class on an element when it is clicked.

// 10. Range-Based Tasks
// 	•	Print all even numbers between 1 and 20.
// 	•	Calculate the sum of all numbers from 1 to 100.
// 	•	Create a range of numbers as an array and iterate over it.

// 11. Filtering and Mapping Arrays
// 	•	Filter out all numbers greater than 10 from an array.
// 	•	Transform an array of numbers into their squares (.map()).
// 	•	Find the first number greater than 5 in an array.

// 12. Object and Array Interaction
// 	•	Loop through an array of objects and log a specific property from each object.
// 	•	Add a new key-value pair to each object in an array of objects.
// 	•	Sort an array of objects by a property (e.g., age).

// 13. Working with Dates
// 	•	Get the current date and log it.
// 	•	Format a date into DD/MM/YYYY format.
// 	•	Calculate the difference in days between two dates.

// 14. User Input Handling
// 	•	Create a prompt to take the user’s name and log it.
// 	•	Ask the user for two numbers and log their sum.
// 	•	Validate that the user enters a number.

// 15. Asynchronous Tasks
// 	•	Log “Start”, then use setTimeout() to log “After 2 seconds”.
// 	•	Fetch data from a mock API and log it.
// 	•	Use async/await to fetch user data.

// 16. Error Handling
// 	•	Write a try...catch block to handle division by zero.
// 	•	Throw a custom error if a value is not a number.
// 	•	Catch an error when parsing invalid JSON.

// 17. Array Search and Calculation
// 	•	Find the index of a specific value in an array.
// 	•	Count how many times a specific value appears in an array.
// 	•	Check if an array contains a particular value.

// 18. Pattern Recognition
// 	•	Print a right triangle pattern using nested loops:

// *
// **
// *
// **


// 	•	Create a checkerboard pattern for an n x n grid.
// 	•	Count the occurrences of each character in a string.

// 19. Basic Algorithms
// 	•	Reverse a string without using .reverse().
// 	•	Find the largest number in an array.
// 	•	Check if a string is a palindrome.

// 20. Real-World Simulations
// 	•	Create a to-do list where you can add and remove tasks.
// 	•	Implement a simple calculator for addition, subtraction, multiplication, and division.
// 	•	Create a shopping cart simulation where you can add/remove items and calculate the total cost.

// These tasks break down most programming scenarios into actionable chunks. Each task is small enough to be learned individually but contributes to a larger skillset. Would you like me to elaborate on any specific task or provide solutions?














// ************************************************* Day-2 Practice Questions ******************************************************



// Que. 1- make a function which takes a value and resturn result with 2 added;
// function abcd(val){
//     return val + 2;
// }
// let res = abcd(10);
// console.log(res);


// Que. 2- Make a function which takes a value and return that value with added 2 it, if the data sent during call is not a number, print please pass a number.

// function abcd(val){
//     if(typeof val === "number"){
//         return console.log(val + 2);
//     }else{
//         return console.log("Please pass a number");
//     }
// }

// abcd(10);


// Que. 3- Make a loop which print all number 1 to 20.

// for(let i = 1; i < 21; i++){
//     console.log(i);
// }


// Que. 4- Make a loop which print all number 1 to 20 but except 12, 13, 14.

// for (let i = 1; i < 21; i++) {
//     if(i === 12 || i === 13 || i === 14){
//         continue;
//     }
//     console.log(i);
// }


// Que. 5 Make an array filled numbers, print all the number.
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(elem){
//     console.log(elem)
// })

// Que. 6- Make an array filled with numbers and strings, print only the number;

// let arr = [1, 2, "sid", 6, 8, "sumit", 10];
// arr.forEach(function(elem){
//     if (typeof elem === 'number') {
//         return console.log(elem);
//     }
// });


// let arr = [1, 2, "sid", 6, 8, "sumit", 10];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i])
//     }
// }





// ************************************************* Day-3 Practice Questions ******************************************************




// Que. 1- make a prompt. check for a number. it is not a number print , please enter a number. if it is a number, check for positive and negative number. and handle edge cases like as cancel button, okay button straightforward, "     " string with extra spaces.

// let input = prompt("Enter a number");
// console.log(input);            // if user press cancel it return null and press ok it return string

// if (input === null || input.trim() === "") {
//     console.log("Please enter a value")
// } else {
//     let numValue = Number(input);
//     if (isNaN(numValue)) {
//         console.log("Please Enter a Number");
//     } else {
//         if (numValue >= 0) {
//             console.log("Positive Number");
//         } else {
//             console.log("Negative Number");
//         }
//     }
// }





// ************************************************* Day-4 Practice Questions ******************************************************





























// let inp = prompt("Enter a number");

// if (inp === null || inp.trim() === "") {
//     console.log("Please Enter a value");
// } else {
//     let numValue = Number(inp);
//     if (isNaN(numValue)) {
//         console.log("Please enter a valid number");
//     } else {
//         if (numValue >= 0) {
//             console.log("positive");
//         } else {
//             console.log("Negative");
//         }
//     }
// }

