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
// let num = 0;
// for (let i = 0; i < 3; i++) {
//     let str = '';
//     for (let j = 0; j < 3; j++) {
//         str += num ;
//         num++;
//     }
//     console.log(str);
// }


// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
// let array = [1, 2, 3, 4];
// let reverseArray = [];
// for (let i = array.length-1 ; i >= 0; i--) {
//     reverseArray.push(array[i]);
// }
// console.log(reverseArray); 

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
// function startWithChar(str, char){
//     return str.startsWith(char)
// }
// console.log(startWithChar("hello", "h"));        // true
// console.log(startWithChar("hello", "e"));        // false
// console.log(startWithChar("world", "w"));        // true


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


// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(fact);


// 	47.	Write a function that accepts a string and returns its reverse.
// function reverseStr(str) {
//     let res = str.split('').reverse().join('');
//     return res;
// }
// console.log(reverseStr("hello"));

// function findReverse(str) {
//     let res = '';
//     for (let i = str.length-1 ; i >= 0; i--) {
//         res += str[i];
//     }
//     return res;
// }
// console.log(findReverse("hellow"));



// 	48.	Create a function to find the largest number in an array.
// function findLargest(arr) {
//     let LargeVal = [0];
//     for (let i = 0; i < arr.length; i++) {
//         if (LargeVal < arr[i]) {
//             LargeVal = arr[i];
//         }
//     }
//     return LargeVal
// }
// console.log(findLargest([5, 8, 12, 38, 10 , 5]))   // 38

// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
// function kebabCase(str) {
//     return str
//         .replace(/([a-z])([A-Z])/g, '$1-$2')  // Handle camelCase
//         .replace(/\s+/g, '-')                  // Replace spaces with hyphens
//         .toLowerCase();                        // Convert to lowercase
// }
// console.log(kebabCase("Hello World"))   // hello-world


// 	50.	Create a function that logs "Hello, World!" every time it is called.
// function sayHello() {
//     console.log("Hellow World!");
// }
// sayHello();


// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.
// let inp = -100;
// if (typeof inp === "number") {
//     if (inp === 0) {
//         console.log("Zero");
//     } else if (inp > 0) {
//         console.log("Positive");
//     } else {
//         console.log("Negative");
//     }
// }else{
//     console.log("Enter a valid number");
// }

// 	52.	Create a program to check if a year is a leap year.
// let num = 2021;
// if (num % 100 !== 0 && num % 4 === 0) {
//     console.log(`${num} is a leap year.`);
// } else {
//     console.log(`${num} is not a leap year.`);
// }

// 	53.	Write an if...else statement to determine if a person can vote based on their age.
// let age = 17;
// if (age >= 18) {
//     console.log("You can vote.");
// } else {
//     console.log("You can not vote.");
// }

// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
// let inp = 2;
// switch (inp) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 6:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Enter a valid number between 1 to 7");
// }

// 	55.	Write a program to check if a number is divisible by 3 and 5.
// let inp = 30;
// if (inp % 3 === 0 && inp % 5 === 0) {
//     console.log("Number is divisible by 3 and 5");
// }else{
//     console.log("Number is not divisible by 3 and 5");
// }


// 	56.	Create a program to check the grade of a student based on marks.
// let marks = 50;
// if (marks > 60) {
//     console.log("Grade-A");
// } else if (marks > 50 && marks < 60) {
//     console.log("Grade-B");
// } else if (marks > 30 && marks > 50) {
//     console.log("Grade-c");
// } else {
//     console.log("Failed");
// }

// 	57.	Write an if condition to compare two strings and log if they are equal.
// let str1 = "hh";
// let str2 = "hh"
// let compareValue = str1.localeCompare(str2);
// console.log(compareValue);   // -1         { if not match(-1) and if match(0) }

// 	58.	Use a ternary operator to check if a number is even or odd.
// let num = 21;
// let res = num % 2 === 0 ? "Even Number" : "Odd Number";
// console.log(res);

// 	59.	Write a program to find the largest of three numbers using if...else.
// let a = 72;
// let b = 10;
// let c = 17;

// if (a > b && a > c) {
//     console.log(`${a} is grater than ${b} and ${c}`);
// } else if(b > c && b > a) {
//     console.log(`${b} is grater than ${c} and ${a}`);
// }else{
//     console.log(`${c} is grater than ${a} and ${b}`);
// }

// 	60.	Create a program to calculate the discount based on the price of an item.
// function findDiscountPercentage(realPrice, discountPrice) {
//     let discountPercentage = (discountPrice / realPrice) * 100;
//     return discountPercentage + "%"
// }
// console.log(findDiscountPercentage(200, 10));



// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.
// let obj = {
//     name: "abhi",
//     age: 22,
//     city: "Bhopal",
// }
// console.log(obj)

// 	62.	Add a new property isStudent to the object above and set it to true.
// let obj = {
//     name: "abhi",
//     age: 22,
//     city: "Bhopal",
// }
// obj.isStudent = true;
// console.log(obj)

// 	63.	Access and log the value of the city property using bracket notation.
// let obj = {
//     name: "abhi", 
//     age: 22,
//     city: "Bhopal",
// }
// console.log(obj["city"]);

// 	64.	Delete the age property from an object and log the updated object.
// let obj = {
//     name: "abhi",
//     age: 22,
//     city: "Bhopal",
// }
// delete obj.age;
// console.log(obj);

// 	65.	Write a function that accepts an object and logs all its keys.
// function findKeyObject(obj) {
//     for (const key in obj) {
//         console.log(key);
//     }
// }
// findKeyObject({ name: "abhi", age: 22, city: "Bhopal" })

// 	66.	Create an array of objects representing books with title and author properties.
// let bookDetails = [
//     {
//         title : "The last lecture",
//         author: "Randy Pausch",
//     },
//     {
//         title : "Girl wash your face",
//         author: "Rachel Hollis",
//     },
// ]

// 	67.	Access and log the author of the second book in the array.
// let bookDetails = [
//     {
//         title : "The last lecture",
//         author: "Randy Pausch",
//     },
//     {
//         title : "Girl wash your face",
//         author: "Rachel Hollis",
//     },
// ];
// console.log(bookDetails[1]);

// 	68.	Write a program to check if a specific key exists in an object.
// let obj = {
//     name: "abhi",
//     age: 22,
//     city: "Bhopal",
// }
// console.log(obj.hasOwnProperty("age"));  //true
// console.log("city" in obj);    //true

// 	69.	Create a function to count the number of keys in an object.
// let obj = { name: "abhi", age: 22, city: "Bhopal" };
// function countKey(obj) {
//     return Object.keys(obj).length;
// }
// console.log(countKey({ name: "abhi", age: 22, city: "Bhopal" }));

// 	70.	Use Object.assign() to merge two objects.
// let obj1 = { a: 10 };
// let obj2 = { b: 20 };
// let obj = Object.assign(obj1, obj2);
// console.log(obj);

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.
// let str = "hello"
// console.log(str.length);

// 	72.	Extract the last 4 characters of a string.
// let str = "hello";
// let res = str.slice(1, 5);
// console.log(res);

// 	73.	Convert a string to lowercase and log it.
// let str = "HELLO";
// console.log(str.toLowerCase());

// 	74.	Split a sentence into words using .split() and log the result.
// let str = "JavaScript is awesome"
// let res = str.split(' ');
// console.log(res);

// 	75.	Find the position of the first occurrence of "a" in a string.
// let str = "JavaScript";
// console.log(str.indexOf("a"));   // 1       if not found return(-1)


// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
// let str = "I love JavaScript";
// let res = str.replace("JavaScript", "JS");
// console.log(res);

// 	77.	Repeat a string 3 times using .repeat().
// let str = "JavaScript";
// let res = str.repeat(3);
// console.log(res);

// 	78.	Create a function that checks if a string contains a specific word.
// function findWord(str, word) {
//     return str.includes(word);
// }
// console.log(findWord("Js is a fun", "fun"))       // true
// console.log(findWord("Js is a awesome", "fun"))   // false

// 	79.	Write a program to remove whitespace from both ends of a string.
// function removeWhiteSpace(str){
//     return str.trim();
// }
// console.log(removeWhiteSpace("   hello   "));

// 	80.	Create a function to count the number of vowels in a string.
// function countVowel(str) {
//     let vowelCount = 0;
//     let vowel = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i].toLowerCase())){
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }
// console.log(countVowel("abhishek"));


// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
// function evenNumber(arr) {
//     arr.forEach(element => {
//         if (element % 2 === 0) {
//             console.log(element);
//         }
//     });

// }
// evenNumber([1, 2, 3, 4, 5]);

// 	82.	Create a program to count the occurrences of a specific value in an array.
// let arr = [10, 5, 3, 8, 5, 3, 2];
// let val = 5
// function checkOccurrences(arr, val) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             res++;
//         }
//     }
//     return res;
// }
// console.log(checkOccurrences(arr, val));


// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
// function checkPalindrome(str) {
//     let revStr = str.split('').reverse().join('');
//     if(revStr === str) return "Palindrome"
//     else return "Not Palindrome"
// }
// console.log(checkPalindrome("kanak"));

// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

// let row = 4;
// let star = '';
// for (let i = 0; i < row; i++) {
//     star += "*"
//     console.log(star);
// }

// 	85.	Write a function that returns the square of each number in an array.
// function findSquare(arr) {
//     return arr.map((elem) => Math.pow(elem, 2));
// }
// console.log(findSquare([1, 2, 3, 4, 5]));

// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
// let sumOfOdd = 0;
// for (let i = 1; i < 51; i++) {
//     if (i % 2 !== 0) {
//         sumOfOdd += i;
//     }
// }
// console.log(sumOfOdd);

// 	87.	Create an object representing a person and log their full name.
// let person = {
//     fullName : "John Doe",
//     age: 65,
// }
// console.log(person.fullName);

// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
// let str = "10";
// let numVal = Number(str);
// console.log(numVal + 5);

// 	89.	Write a program to reverse an array without using .reverse().
// let arr = [1, 3, 5, 6, 8, 9];
// let reverseArray = [];
// for (let i = arr.length-1; i > 0; i--) {
//     reverseArray.push(arr[i]);
// }
// console.log(reverseArray);

// 	90.	Create a program to check if an array is empty.
// let arr = [1, 3];
// let isEmpty = arr.length === 0 ? "Empty" : "Not Empty";
// console.log(isEmpty);

// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
// let date = new Date();
// let currentDate = date.getDate();
// let currentMonth = date.getMonth() + 1;
// let currentYear = date.getFullYear();
// console.log(`Date is ${currentDate}/${currentMonth}/${currentYear}`);



// 	92.	Write a program to find the smallest number in an array.
// let arr = [1, 5, 7, 9];
// let minVal = Math.min(...arr);
// console.log(minVal)

// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// function getFibonacciSequence(val) {
//     let a = 0;
//     let b = 1;
//     let next;
//     if (val > b) {
//         console.log(b)
//     }
//     for (let i = 2; i < val; i++) {
//         next = a + b;
//         console.log(next)
//         a = b;
//         b = next;
//     }
// }

// getFibonacciSequence(5);


// 	94.	Use a try...catch block to handle division by zero.
// function divideNumbers(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error('Division by zero is not allowed');
//         }
//         console.log(a / b);
//     } catch (error) {
//         console.log('Error:', error.message);
//     }
// }
// divideNumbers(10, 2); // Output: 5
// divideNumbers(10, 0); // Output: Error: Division by zero is not allowed


// 	95.	Write a program to find the index of the first vowel in a string.
// let str = "abhi";
// let vowel = ['a', 'e', 'i', 'o', 'u'];
// for (let i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) {
//         console.log(str[i]);
//         break;
//     }
// }


// 	96.	Create a function that accepts an array and returns only unique values.
// function getUniqueVal(arr) {
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(getUniqueVal([1, 2, 3, 3, 5, 5]));

// 	97.	Write a program to merge two sorted arrays into one sorted array.
// let arr1 = [7, 5, 3, 2, 9];
// let arr2 = [1, 4, 8, 2, 10];
// let finalArr = [...arr1, ...arr2].sort((a, b) => a-b);
// console.log(finalArr);

// 	98.	Create a function to count the number of words in a string.
// function countWord(str) {
//     return str.split(' ').length;
// }
// console.log(countWord("Js is a fun"));


// 	99.	Write a program to toggle a button’s background color when clicked.
// let btn = document.querySelector("#btn");
// btn.addEventListener('click', () => {
//     if (btn.innerHTML === "Click") {
//         btn.style.backgroundColor = "red";
//         btn.innerHTML = "Clicked";
//     } else {
//         btn.style.backgroundColor = "indigo";
//         btn.innerHTML = "Click";
//     }
// });


// 	100. Write a function to check if all elements in an array are greater than a specific value.
// function findGreater(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= val) {
//             return "All elements are not greater than this value";
//         }
//     }
//     return "All elements are greater than this value";
// }
// console.log(findGreater([9, 7, 3, 4, 5], 3));

// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!









// ************************************************* Day-5 Practice Questions *************************************************








// _________________________________________________________Sheet- 3__________________________________________________




// Here are 100 new JavaScript questions, slightly harder than the previous ones, focusing on problem-solving, intermediate concepts, and advanced use of JavaScript features.

// 1. Intermediate Console and Variables (10 Questions)
// 	1.	Create a program that calculates and logs the result of (5 + 3) * 2 - 8 / 4.
// console.log((5 + 3) * 2 - 8 / 4);     //  14

// 	2.	Log the value of a variable before and after incrementing it using ++.
// let a = 1;
// console.log(a);   // 1
// a++;
// console.log(a);    // 2

// 	3.	Write a program that swaps the values of two variables without using a third variable.
// let a = 10;
// let b = 90;
// console.log("Before Swapping", a, b);
// a = a + b ;
// b = a - b ;
// a = a - b ;
// console.log("After Swapping", a, b);

// 	4.	Create a variable with a template literal that includes your name and age.
// let name = 'abhi';
// let age = 22;
// console.log(`Name : ${name} & Age : ${age}`);

// 	5.	Use console.table() to display the following object: { name: "John", age: 30, city: "New York" }.
// let obj = { name: "John", age: 30, city: "New York" };
// console.table(obj);

// 	6.	Create a program that uses console.group() to group related logs.
// console.log("Hello world!");
// console.group();
// console.log("Hello again, this time inside a group!");
// console.log('hhhhhhhhhhhhhhhh')
// console.groupEnd();
// console.log("and we are back.");

// 	7.	Use console.time() and console.timeEnd() to measure the execution time of a simple loop.
// console.log("Hello world!");
// console.time()
// console.log("Hello again, this time inside a group!");
// console.log('hhhhhhhhhhhhhhhh')
// console.timeEnd()     //  default: 0.558ms
// console.log("and we are back.");

// 	8.	Log a variable’s value dynamically by including it in a string: "The value is: <value>".
// let str = "Hello World!"
// console.log(`The value is: ${str}`);

// 	9.	Use console.trace() to debug a function call stack.
// function myFunction() {
//     myOtherFunction();
//   }

//   function myOtherFunction() {
//     console.trace();
//   }

// myFunction();

// 	10.	Create and log an object dynamically using computed property names.
// let cityProperty = "city";
// let obj = {
//     name: "John",
//     age: 30,
//     [cityProperty]: "New York"
// };
// console.log(obj);    // { name: 'John', age: 30, city: 'New York' }


// 2. Advanced Loops (10 Questions)
// 	11.	Write a nested loop to generate a multiplication table (1 to 10).
// for (let i = 1; i < 11; i++) {
//     console.log(`--- Table of ${i} ---`)
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }


// 	12.	Use a for...in loop to iterate through the properties of an object.
// let obj = { name: "John", age: 30, city: "New York" };
// for (const property in obj) {
//    console.log(property);
// }

// 	13.	Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 	14.	Use a for...of loop to iterate over a string and count the vowels.
// let str = "helloei";
// let vowel = "aeiouAEIOU";
// let vowelCount = 0;

// for (const element of str) {
//     if(vowel.includes(element)){
//         vowelCount++;
//     }
// }
// console.log(vowelCount)    // 4

// 	15.	Create a loop that breaks out when a specific condition is met (e.g., number divisible by 7).
// for(i = 1; i < 51; i++){
//     if(i % 7 === 0){
//         console.log(i);
//         break;
//     }
// }

// 	16.	Write a loop that skips numbers divisible by 3 but logs all others up to 20.
// for (let i = 1; i < 30; i++) {
//     if (i % 3 === 0) continue;
//     if (i > 20) console.log(i);
// }

// 	17.	Use a do...while loop to prompt the user until they enter a positive number.
// let inp;
// do {
//     inp = +prompt("Enter a number");
//     if (inp >= 0) break;
// } while (true);

// 	18.	Write a nested loop to generate a pyramid pattern:
//     *
//    ***
//   *****
//  *******
// let rows = 4; // Number of rows
// for (let i = 1; i <= rows; i++) {
//     let star = "";
//     // Add spaces before stars
//     for (let j = rows; j > i; j--) {
//         star += " ";
//     }
//     // Add stars
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         star += "*";
//     }
//     console.log(star);
// }


// 	19.	Use a loop to reverse a string "JavaScript".
// let str = "JavaScript";
// let revStr = '';
// for(i = str.length-1; i >= 0; i-- ){
//     revStr += str[i];
// }
// console.log(revStr);      //  tpircSavaJ

// 	20.	Write a program to calculate the product of all numbers in an array using a loop.
// let arr = [2, 5, 5];
// let productOfAllNumber = 1;
// for (let i = 0; i < arr.length; i++) {
//     productOfAllNumber *= arr[i];
// }
// console.log(productOfAllNumber);  //  50


// 3. Arrays and Objects (10 Questions) 
// 	21.	Write a program to merge two arrays and remove duplicate values.
// let arr1 = [1, 2, 3];
// let arr2 = [1, 4, 5];
// let arr = [...arr1, ...arr2];
// let res = [...new Set(arr)]
// console.log(res);


// 	22.	Create a program to find the second largest number in an array.
// let arr = [1, 2, 9, 3, 6, 5];
// arr.sort((a, b) => b - a);
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[0]) {
//         console.log(arr[i]);
//         break;
//     }
// }

// 	23.	Write a function that removes all falsy values from an array.
// function removeFalsyVal(arr) {
//     let falsyVal = [false, undefined, 0, -0, "", null, NaN];
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!falsyVal.includes(arr[i])) {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// let mixVal = [false, 0, -0, "", null, undefined, NaN, "hello", 1, [], {}, true];
// console.log(removeFalsyVal(mixVal));         //  [ 'hello', 1, [], {}, true ]

// 	24.	Use .reduce() to find the total sum of numbers in an array.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((acc, cur) => acc = acc + cur , 0);
// console.log(res);

// 	25.	Write a program that rotates an array to the left by n positions.
// function leftRotate(arr, n){
//     let res = arr.splice(0, n);
//     arr.push(...res)
// 	return arr;
// }
// let arr = [1, 2, 3, 4, 5, 8, 9, 10];
// let n = 4
// console.log(leftRotate(arr, n));


// 	26.	Use .find() to locate the first even number in an array.
// let arr = [1, 9, 3, 4, 5];
// let res = arr.find((elem) => elem % 2 === 0);
// console.log(res);    // 4

// 	27.	Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).
// function flattenArray(arr) {
//     return arr.flat(Infinity);
// }
// const nestedArray = [1, [2, [3]]];
// console.log(flattenArray(nestedArray)); // [1, 2, 3]


// 	28.	Write a program that counts how many times each element appears in an array.
// let arr = [1, 3, 3, 4, 5, 5];
// let CountDetails = {};
// for (let i = 0; i < arr.length; i++) {
//     CountDetails[arr[i]] = (CountDetails[arr[i]] || 0) + 1;
// }
// console.log(CountDetails)

// 	29.	Use .some() and .every() to check conditions on an array.
// const ages = [32, 33, 16, 40];
// // every() = It returns true if all elements meet the condition, and false if any one element does not meet the condition.
// let resOfEvery = ages.every((age) => age > 18);
// console.log(resOfEvery);      //  false

// // some() = It returns true if any one element meets the condition, and false if none of the elements meet the condition.
// let resOfSome = ages.some((age) => age > 18);
// console.log(resOfSome);      //   true

// 	30.	Sort an array of objects by a specific property.
// let arrOfObj = [{ name: "abhi", age: 21 }, { name: "kunal", age: 28 }, { name: "sid", age: 24 }]
// let sortByAge = arrOfObj.sort((a, b) => a.age - b.age);
// console.log(sortByAge);
// // let sortByName = arrOfObj.sort((a, b) => a.name.localeCompare(b.name));
// // console.log(sortByName);

// 4. Functions and Closures (10 Questions)
// 	31.	Write a function that returns another function to calculate the power of a number.
// function calculatePower(num) {
//     let res;
//     return function () {
//         res = Math.pow(num, 2);
//         console.log(res);
//     }
// }
// let ans = calculatePower(5)
// ans();

// 	32.	Create a recursive function to calculate the Fibonacci sequence up to n terms.
// function fibonacci(n) {
//     if (n < 2)
//         return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

// 	33.	Write a function that uses closures to create a counter.
// function counter(num) {
//     let count = 1;
//     return function () {
//         let intervalId = setInterval(() => {
//             console.log(count)
//             if (count === num) {
//                 clearInterval(intervalId);
//             }
//             count++;
//         }, 1000)
//     }
// }
// let ans = counter(10);
// ans();

// 	34.	Create a function that memoizes the result of a computation.

// 	35.	Write a function to debounce a button click event.
// 	36.	Implement a function that throttles an API call.
// 	37.	Create a higher-order function that applies a callback to each element of an array.
// 	38.	Write a function that calculates the GCD (Greatest Common Divisor) of two numbers.

// 	39.	Create a function that accepts an array of functions and executes them sequentially.
// let arr = [function sayHello() { console.log("hello") }, function sayHey() { console.log("hey") }, function sayHi() { console.log("hi") }]
// function executesAllFn(arr) {
//     arr.map((elem) => elem())
// }
// executesAllFn(arr);

// 	40.	Write a function to curry a simple mathematical operation.

// 5. Strings and Regular Expressions (10 Questions)
// 	41.	Write a program to reverse the words in a sentence but not the sentence itself.
// let str = "JavaScript is a fun"
// let strArray = str.split(' ');
// let res = "";
// for (let i = 0; i < strArray.length; i++) {
//     for (let j = strArray.length-1; j < 0; j++) {
//         strArray = [...strArray[j]];
//     }
// }
// console.log(strArray)

// 	42.	Use a regex to validate if a string is a valid email address.
// function validateEmail(email){
//     if (email.match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/)) {
//         console.log("This is a valid email");
//     }else{
//         console.log("This is not a valid email");
//     }
// }
// validateEmail("ak@exapmle.com");    //   This is a valid email
// validateEmail("akhjshd");           //   This is not a valid email

// 	43.	Create a function to check if a string contains only digits.
// function checkStr(str) {
//     let digits = "0123456789";
//     for (i = 0; i < str.length; i++) {
//         if (!digits.includes(str[i])) {
//             console.log("This string does not contain only numbers")
//             return;
//         }
//     }
//     console.log("This string contains only numbers")
// }
// checkStr("abc");    //    This string do not contain only numbers
// checkStr("123");    //    This string contains only numbers
// checkStr("ab2c")    //    This string does not contain only numbers

// 	44.	Write a function to extract all numbers from a string and return them as an array.
// function filterNumber(str) {
//     let digits = "0123456789";
//     let numArray = [];
//     for (let i = 0; i < str.length; i++) {
//         if (digits.includes(str[i])) {
//             numArray.push(str[i]);
//         }
//     }
//     if (numArray.length === 0) {
//         return "There are no numbers in this string.";
//     }
//     return numArray;
// }
// console.log(filterNumber("a12b"));      //   [ '1', '2' ]
// console.log(filterNumber("ab"));        //   There are no numbers in this string.

// 	45.	Use .match() to find all occurrences of a word in a string.

// 	46.	Create a program to capitalize the first letter of each word in a string.
// function capitalizeWord(str) {
//     res = str.split(" ").map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1)).join(" ");
//     return res;
// }
// console.log(capitalizeWord("hekk i am"))

// 	47.	Write a function that removes duplicate characters from a string.
// function removeDuplicates(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!res.includes(str[i])) {
//             res += str[i];
//         }
//     }
//     console.log(res)
// }
// removeDuplicates("aass");

// 	48.	Use a regex to replace multiple spaces with a single space.
// 	49.	Write a function to check if a string is an anagram of another string.
// 	50.	Create a function to count the frequency of each word in a string.

// 6. Intermediate DOM Manipulation (10 Questions)
// 	51.	Write a script to dynamically create 10 buttons on a webpage.
// 	52.	Add an event listener to a button that logs its id when clicked.
// 	53.	Write a program to change the background color of a <div> on hover.
// 	54.	Dynamically add a CSS class to an element when a button is clicked.
// 	55.	Create a function to toggle the visibility of an element.
// 	56.	Write a program to count the number of <p> tags on a page.
// 	57.	Implement a function to disable all input fields on a form.
// 	58.	Write a program to clone an element and append it to the DOM.
// 	59.	Add a click event to a list of items and display the clicked item’s text.
// 	60.	Create a program to validate a form using JavaScript.

// 7. Intermediate Algorithms (10 Questions)
// 	61.	Write a function to merge two sorted arrays into one sorted array.
// 	62.	Implement a binary search algorithm.
// 	63.	Write a function to check if two strings are one edit away.
// 	64.	Create a function that finds the longest common prefix in an array of strings.
// 	65.	Write a program to check if a string can be rearranged into a palindrome.
// 	66.	Create a function to find the intersection of two arrays.
// 	67.	Implement the Sieve of Eratosthenes to find prime numbers up to n.
// 	68.	Write a program to generate all subsets of a given array.
// 	69.	Create a function to calculate the power of a number iteratively.
// 	70.	Implement a function to sort an array using the quicksort algorithm.

// 8. Advanced Error Handling (10 Questions)
// 	71.	Write a program to handle a division by zero error.
// 	72.	Use try...catch to log an error message for invalid JSON parsing.
// 	73.	Write a function to validate user input and throw a custom error if invalid.
// 	74.	Create a program to handle a failed promise using .catch().
// 	75.	Use finally to log a cleanup message after a promise resolves or rejects.
// 	76.	Implement a function to retry a failed API call up to 3 times.
// 	77.	Write a function that uses try...catch inside an async function.
// 	78.	Create a program to handle and log syntax errors dynamically.
// 	79.	Write a function to ensure a variable is defined before using it.
// 	80.	Use error handling to check if a file exists before reading it.

// 9. Advanced Array and Object Manipulation (10 Questions)
// 	81.	Write a function that groups an array of objects by a specific property.
// 	82.	Use .map() to transform an array of objects into a new format.
// 	83.	Write a program to deep clone an object without using external libraries.
// 	84.	Create a function that merges multiple arrays into a single unique array.
// 	85.	Write a function to count the occurrences of properties in an array of objects.
// 	86.	Implement a function to sort an array of objects by multiple properties.
// 	87.	Write a function to create a nested object from a flat array of key-value pairs.
// 	88.	Use .reduce() to transform an array into an object with grouped values.
// 	89.	Create a function to find the difference between two arrays of objects.
// 	90.	Write a function to filter and transform an array of objects in a single step.

// 10. Real-World Use Cases (10 Questions)
// 	91.	Create a simple program that fetches and displays user data from a mock API.
// 	92.	Write a program to simulate a shopping cart with add, remove, and total cost features.
// 	93.	Implement a simple pagination system for an array of data.
// 	94.	Write a program to dynamically update a chart using JavaScript.
// 	95.	Create a program to search for and highlight specific text on a webpage.
// 	96.	Write a program to simulate a basic stopwatch with start, stop, and reset functionality.
// 	97.	Implement a function to validate password strength based on rules.
// 	98.	Create a simple image slider with next/previous buttons.
// 	99.	Write a program to sort and display data fetched from an API.
// 	100.	Create a program that automatically saves form data to localStorage.

// Let me know if you’d like to explore solutions or get hints for any of these!