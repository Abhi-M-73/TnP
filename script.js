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










// ********************************************************************************************************************************


// 10. Range-Based Tasks
// 	•	Print all even numbers between 1 and 20.
// 	•	Calculate the sum of all numbers from 1 to 100.
// 	•	Create a range of numbers as an array and iterate over it.











// ********************************************************************************************************************************


// 11. Filtering and Mapping Arrays
// 	•	Filter out all numbers greater than 10 from an array.
// 	•	Transform an array of numbers into their squares (.map()).
// 	•	Find the first number greater than 5 in an array.






// ********************************************************************************************************************************


// 12. Object and Array Interaction
// 	•	Loop through an array of objects and log a specific property from each object.
// 	•	Add a new key-value pair to each object in an array of objects.
// 	•	Sort an array of objects by a property (e.g., age).









// ********************************************************************************************************************************


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





// ************************************************* Day-4 Practice Questions *************************************************



// Que. 1- first and last char ko add karna.
// let str = "Swachh Bharat ka irada kar liya hamne"
// let res  = str.charAt(0) + str.charAt(str.length-1);
// console.log(res);


// _________________________________________________________Sheet- 1__________________________________________________



// 1.⁠ ⁠Basic Console Usage
// 	1.	Write a program that calculates the sum of 5 + 10, assigns it to a variable, and logs the result to the console.

// 	let sum = 5 + 10;
// 	console.log(sum);




// 2.⁠ ⁠Variables and Data Types
// 	2.	Declare a variable age with the value 25. Then, reassign it to 30 and log its type using typeof.
// 	let age = 25;
// 	age = 30;
// 	console.log(typeof age);




// 3.⁠ ⁠Loops
// 	3.	Write a for loop that prints all the odd numbers between 1 and 20.
// 	answer =>
// 	for(let i = 1; i < 21; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// 	}

// 	4.	Create a while loop that starts at 10 and decreases by 2 until it reaches 0. Log each step.
// 	answer =>
// let i = 10;
// while(i > 0){
//     console.log(i);
//     i = i-2;
// }


// 4.⁠ ⁠Arrays
// 	5.	Create an array of your favorite fruits (at least 5).
// 	•	Add a new fruit to the end of the array.
// 	•	Remove the first fruit from the array.
// 	•	Log the updated array.

// let fruits = ["mango", "apple", "banana", "guava", "litchi"];
// fruits.push("grapes");
// fruits.shift();
// console.log(fruits);



// 	6.	Write a program that iterates over an array of numbers and prints only the numbers greater than 10.
// let arr = [88, 5, 15, 26, 8, 12, 7, 10, 19];
// arr.forEach(function(elem){
//     if (typeof elem === "number" && elem > 10) {
//         console.log(elem)
//     }
// });





// 5.⁠ ⁠Functions
// 	7.	Write a function multiplyNumbers that takes two numbers as arguments and returns their product. Test the function with values 5 and 6.

// function multiplyNumbers(a, b){
//     return a * b;
// }
// console.log(multiplyNumbers(5, 6))

// 6.⁠ ⁠Conditionals
// 	8.	Write an if...else statement to check if a number is divisible by 3. If it is, log “Divisible by 3,” otherwise log “Not divisible by 3.”
// let num = 10;
// if (num % 3 === 0) {
//     console.log("Divisible by 3");
// } else {
//     console.log("Not divisible by 3")
// }

// 7.⁠ ⁠Object Basics
// 	9.	Create an object book with properties: title, author, and year. Add a new property genre with the value fiction and log the updated object.

// let obj = {
//     title : "JavaScript",
//     author : "Brendan Each",
//     year : 1992,
// }
// obj.completeIn = "15 days"
// console.log(obj);

// 8.⁠ ⁠String Manipulation
// 	10.	Write a program that takes a string JavaScript is fun! and:
// 	•	Converts it to all uppercase.
// 	•	Extracts the first 10 characters.
// 	•	Replaces the word fun with awesome.

// let str = "JavaScript is fun!";
// let CapVal = str.toUpperCase();
// let tenChar = str.slice(0, 10);
// let replaceVal = str.replace("fun", "Awesome");
// console.log("CapVal");
// console.log("tenChar");
// console.log("replaceVal");



// Let me know if you’d like solutions or hints for these questions!



// _________________________________________________________Sheet- 2__________________________________________________


// Here is a collection of 100 JavaScript questions, divided into groups of 10, based on topics 1-8, with increasing complexity.

// 1. Basic Console Usage (10 Questions)
// 	1.	Log your name and favorite hobby to the console.
// console.log("Abhishek", "Coding");

// 	2.	Perform and log the result of 45 * 2 - 10.
// let result = 45 * (2 - 10);
// console.log(result);


// 	3.	Use console.log() to display the current year.
// console.log(2025)

// 	4.	Create two variables for first and last name. Concatenate and log them.
// let firstName = "Abhishek";
// let lastName = "Maddheshiya";
// console.log(firstName + " " + lastName);


// 	5.	Track the value of a variable by logging it before and after updating.
// let a = 20;
// console.log(a)    // 20


// console.log(a)    // 20
// a = 50
// console.log(a)    // 50


// 	6.	Use console.error() to simulate an error message.
// console.error("Something went wrong");

// 	7.	Log the square of the number 12 to the console.
// console.log(12 ** 2);
// console.log(Math.pow(12, 2))

// 	8.	Print the type of a variable holding the value true.
// let val = true;
// console.log(typeof val);

// 	9.	Create a variable holding your age and log whether it’s greater than 18.
// let age = 22;
// if (age > 18) {
//     console.log(age)
// }

// 	10.	Log the result of 100 / 0 and observe the output.
// console.log(100 / 0);  //Infinity




// 2. Variables and Data Types (10 Questions)
// 	11.	Declare a variable using let and log its value.
// let name = "sumit";
// console.log(name)


// 	12.	Create a constant to store the value of PI and log it.
// const PI = 3.14;
// console.log(PI);


// 	13.	Reassign a value to a variable declared with let and log the result.
// let name = "sumit";
// name = "sid";
// console.log(name);

// 	14.	Check the type of null and log it.
// console.log(typeof null);   // object   

// 	15.	Create a variable with a number as a string (e.g., "25") and log its type.
// let a = "25";
// console.log(typeof a);   // string

// 	16.	Use typeof to check the type of a boolean variable.
// let val = false
// console.log(typeof val);  // boolean

// 	17.	Create three variables of types string, number, and boolean, and log their values.
// let str = "hello";
// let num = 10;
// let bool = true;
// console.log(str, num, bool);    // hello 10 true

// 	18.	Declare a variable without assigning a value. Log its type.
// let val;
// console.log(typeof val);   // undefined

// 	19.	Create a variable with undefined and log its type.
// let val = undefined;
// console.log(typeof val);    //undefined
// 	20.	Use const to create an array. Try reassigning the array and observe the error.
// const arr = [];
// arr = {};
// console.log(arr)        //TypeError: Assignment to constant variable.




// 3. Loops (10 Questions)
// 	21.	Write a for loop to print numbers from 1 to 50.
// for (let i = 0; i < 51; i++) {
//     console.log(i);    
// }

// 	22.	Use a while loop to sum the numbers from 1 to 10.
// let i = 1;
// while(i < 11){
//     console.log(i)
//     i++;
// }

// 	23.	Create a for...of loop to log each character of the string "JavaScript".
// let str = "JavaScript"
// for (const i of str) {
//     console.log(i);
// }

// 	24.	Write a for loop that skips even numbers between 1 and 20.
// for (let i = 1; i < 21; i++) {
//     if(i % 2 === 0){ }
//     else{
//         console.log(i);
//     }
// }

// 	25.	Use a do...while loop to log numbers from 5 to 1.
// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

// 	26.	Create a for loop that calculates the factorial of 5.
// let num = 5;
// let fact = 1;
// for (let i = num; i > 0; i--) {
//     fact = fact * i;
// }
// console.log(fact);  //120

// 	27.	Write a nested loop to print a 3x3 grid of numbers.


// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
// let array = [1, 2, 3, 4];
// for (let i = array.length-1 ; i >= 0; i--) {
//     console.log(array[i])
// }

// 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
// let i = 1;
// while(i < 100){
//     if (i % 5 === 0) {
//         console.log(i)
//     }
//     i++;
// }

// 	30.	Use a for...in loop to iterate over an object and log its keys.
// let car ={
//     name: "Lambo",
//     color: "blue",
//     speed: "200 km/h"
// }
// for (const key in car) {
//     console.log(key)
// }

// 4. Arrays (10 Questions)
// 	31.	Create an array of your top 5 favorite movies and log it.
// let movies = ["Bahubali", "KGF", "Simba", "Dhoom", "War"];
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i])
// }

// 	32.	Find and log the second element of an array.
// let arr = [1, 2, 4, 6, 7];
// console.log(arr[1])


// 	33.	Add two new elements to the start of an array using .unshift().
// let arr = [1, 2, 4, 6, 7];
// arr.unshift(10, 20);
// console.log(arr);

// 	34.	Remove the last element of an array and log the updated array.
// let arr = [1, 2, 4, 6, 7];
// arr.pop();
// console.log(arr);

// 	35.	Use .slice() to extract the first three elements of an array.
// let arr = [1, 2, 4, 6, 7];
// let res = arr.slice(0, 3);
// console.log(res);

// 	36.	Find the index of a specific element in an array using .indexOf().
// let arr = [1, 2, 4, 6, 7];
// console.log(arr.indexOf(3));  //  -1
// console.log(arr.indexOf(4));  //  2

// 	37.	Check if a value exists in an array using .includes().
// let arr = [1, 2, 4, 6, 7];
// console.log(arr.includes(5));  //false


// 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let res = arr1.concat(arr2);
// console.log(res)    // [ 1, 2, 3, 4 ]

// 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
// let arr = [5, 2, 9, 1];
// arr.sort();
// console.log(arr);   // [ 1, 2, 5, 9 ]

// 	40.	Write a program that creates a copy of an array without mutating the original.
// let arr1 = [5, 2, 9, 1];
// let copy = [...arr1];
// console.log(copy);   //  [ 5, 2, 9, 1 ]
// copy.push(7);
// console.log(copy)    // [ 5, 2, 9, 1, 7 ]
// console.log(arr1);  //   [ 5, 2, 9, 1 ]

// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         console.log("Even Number")
//     } else if (num % 2 !== 0) {
//         console.log("Odd Number");
//     }
// }
// checkEvenOdd(0)


// 	42.	Create a function to calculate the area of a circle with a given radius.
// function areaOfCircle (r){
//     const PI = 3.14;
//     return PI*(r**2);
// }
// console.log(areaOfCircle(2));


// 	43.	Write a function that accepts an array and returns the sum of its elements.
// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i <= arr.length; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfArray([1,2,3,4,5]));

// 	44.	Create a function that checks if a string starts with a specific character.
// function checkChar(str) {
//     if (condition) {
        
//     }
// }

// 	45.	Write a function to find the maximum of two numbers.
// function findMax(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(findMax(10, 51));


// 	46.	Create a function that takes a number and returns its factorial.
// function findFactorial(num){
//     let fact = 1;
//     for (let i = num; i > 0; i--) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(findFactorial(5));

// 	47.	Write a function that accepts a string and returns its reverse.
// function reverseStr(str) {
//     let res = str.split('').reverse().join('');
//     return res;
// }
// console.log(reverseStr("hello"));

// 	48.	Create a function to find the largest number in an array.
// function findLargest(arr) {
    
// }

// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
// 	50.	Create a function that logs "Hello, World!" every time it is called.

// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.
// 	52.	Create a program to check if a year is a leap year.
// 	53.	Write an if...else statement to determine if a person can vote based on their age.
// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
// 	55.	Write a program to check if a number is divisible by 3 and 5.
// 	56.	Create a program to check the grade of a student based on marks.
// 	57.	Write an if condition to compare two strings and log if they are equal.
// 	58.	Use a ternary operator to check if a number is even or odd.
// 	59.	Write a program to find the largest of three numbers using if...else.
// 	60.	Create a program to calculate the discount based on the price of an item.

// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.
// 	62.	Add a new property isStudent to the object above and set it to true.
// 	63.	Access and log the value of the city property using bracket notation.
// 	64.	Delete the age property from an object and log the updated object.
// 	65.	Write a function that accepts an object and logs all its keys.
// 	66.	Create an array of objects representing books with title and author properties.
// 	67.	Access and log the author of the second book in the array.
// 	68.	Write a program to check if a specific key exists in an object.
// 	69.	Create a function to count the number of keys in an object.
// 	70.	Use Object.assign() to merge two objects.

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.
// 	72.	Extract the last 4 characters of a string.
// 	73.	Convert a string to lowercase and log it.
// 	74.	Split a sentence into words using .split() and log the result.
// 	75.	Find the position of the first occurrence of "a" in a string.
// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
// 	77.	Repeat a string 3 times using .repeat().
// 	78.	Create a function that checks if a string contains a specific word.
// 	79.	Write a program to remove whitespace from both ends of a string.
// 	80.	Create a function to count the number of vowels in a string.

// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
// 	82.	Create a program to count the occurrences of a specific value in an array.
// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

// 	85.	Write a function that returns the square of each number in an array.
// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
// 	87.	Create an object representing a person and log their full name.
// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
// 	89.	Write a program to reverse an array without using .reverse().
// 	90.	Create a program to check if an array is empty.
// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
// 	92.	Write a program to find the smallest number in an array.
// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// 	94.	Use a try...catch block to handle division by zero.
// 	95.	Write a program to find the index of the first vowel in a string.
// 	96.	Create a function that accepts an array and returns only unique values.
// 	97.	Write a program to merge two sorted arrays into one sorted array.
// 	98.	Create a function to count the number of words in a string.
// 	99.	Write a program to toggle a button’s background color when clicked.
// 	100.	Write a function to check if all elements in an array are greater than a specific value.

// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!