// What is a variable?
// A container that we use to store values and give them names.

// 1. Introduction to Variables
// Explain what variables are and why they are important in JavaScript.
// Discuss 'var', 'let', and 'const' with examples.

// The keyword var (pretend var does not exist)

// Example of variable declaration
// let message = "Hello, World!";
// console.log(message);

// Example of constant
// const numbers = [12, 34, 15, 13];
// numbers.push(100);
// console.log(numbers);

// Why are there two ways, let and const?
// Programmer mindset: good code can be reasoned about by a human.
// When you use const, you are telling the reader that this variable CAN NEVER CHANGE!
// You don't have to wonder: where else in my code does this variable change?
// You should always prefer to start with const. And use let as needed.

// NOTE: When you have an array assigned to a const, you can still change the values in the array.

// 2. Types of Variables
// Discuss different data types: String, Number, Boolean, Null, Undefined, Object, Array
/*
    // Number
    let age = 25;

    // String
    let name = "Jane Doe";

    // Boolean
    let isStudent = true;

    // Null
    let empty = null;

    // Undefined
    let unknown;

    // Object
    let person = { firstName: "John", lastName: "Doe" };

    // Array
    let numbers = [1, 2, 3, 4, 5];
*/

// 3. Basic Operations with Variables
// Show how to perform operations with variables

// Arithmetic operations
// let number1 = 10;
// let number2 = 15;

// let sum = number1 - number2;
// console.log("Sum:", sum);

// String concatenation
// let hello = "Halit";
// let world = "World";
// // let greeting = "Hi, " + hello + "!";
// let greeting2 = `Hi, hello ${world}!`;
// console.log(greeting2);
// Hi, Halit World!

// Creating variable with other variables

// 4. Variable names and readability.
// Take a guess. What type of thing is this code doing? :)
/*
    const part0 = 1;
    const par1 = 0.25;
    const part2 = part0 + part1;
*/

// Camel case (we do this in JavaScript)
// totalPriceHere

// Snake case
// total_price_is_this

// kebab case
// total-price-is-this

// 5. Introduction to Conditions
// Explain the use of conditions to control the flow of the program

// let age = 20;
// let name = "Salah";
// // If-else statement
// if (age >= 18 || name === "Halit") {
//   console.log("You are an adult. and your name might be Halit.");
// } else {
//   console.log("You are a minor.");
// }

// Comparison operators: ==, ===, !=, !==, <, >, <=, >=
// Logical operators: &&, ||, !

// 6. Introduction to Functions
// Explain what functions are and how they are used
// Function definition
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// // Function call
// console.log(greet("Halit"));

// const numberTen = 10;

// function multiplyByTwo(number) {
//   const numberMultipledByTwo = number * 2;
//   console.log(numberMultipledByTwo);
//   return numberMultipledByTwo;
// }

// const tenMultiplyedByTwo = multiplyByTwo(numberTen);
// console.log("tenMultiplyedByTwo", tenMultiplyedByTwo);
// console.log(multiplyByTwo(5));

// Explain parameters and arguments (they are both the same)
// Discuss return values

// Why are functions useful?
// Code reuse
// Readability

// Programmer mindset
// I never copy paste code, almost ever (there are a few exceptions).
// If I feel myself reaching for the copy-paste button, I always move it into a function (or whatever is needed to reuse code).

// The concept of a return value.
// A function can return **one thing or one variable** (this is a bit nuanced since you can return "one value" that contains multiple things in it).

// Return means "give me back this value when i call the function."

// function addOneAndTriple(x) {
//   return 3 * (x + 1);
// }

// function doesThisWork(x) {
//   console.log(3 * (x + 1));
// }

// let result0 = addOneAndTriple(3);
// const result1 = doesThisWork(3);

// console.log(result0);
// console.log(result1);

// In a function, if you want to use the value, you NEED to return it. You need to "tell the computer which value is important from this function."

// Multiple parameters or arguments (both mean the same). "arguments of a function", "parameters of a function"

// function multipleParamsExample(a, b, c = "hello") {
//   return a + b + c;
// }

// console.log(multipleParamsExample(1, "Hello", "World"));

//   function multipleParamsExample(a, b, c, d) {
//     return a + b + c + d;
//   }

// 7. Combining Conditions and Functions
// Demonstrate using conditions inside functions

const hello = function () {
  return "Hello";
};

const byebye = () => {
  return "byebye";
};

function checkAge(age) {
  //   if (age >= 18) {
  //     return "You are an adult.";
  //   } else if (age >= 16) {
  //     return "You are almost an adult.";
  //   } else if (age >= 13) {
  //     return "You are a teenager.";
  //   } else {
  //     return "You are a minor.";
  //   }

  switch (age) {
    case 18:
      return "You are an adult.";
    case 16:
      return "You are almost an adult.";
    case 13:
      return "You are a teenager.";
    default:
      return "You are a minor.";
  }
}

console.log(checkAge(20));
console.log(checkAge(16));
console.log(checkAge(12));

// ========================

// Additional readings for tonight.
// 1. https://javascript.info/variables
// 2. Magic numbers
