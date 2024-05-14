// JavaScript Demo: High Order Functions - forEach, find, filter, and map

// 1. Introduction to High Order Functions
// Explain what high order functions are and why they are useful in JavaScript.
// Mention that they operate on arrays and can make handling collections of data more efficient.

/*
    // High order functions are functions that take other functions as arguments or return a function as their result.
*/

// 2. forEach
// Discuss how forEach is used for iterating over arrays without creating a new array.

// const fruits = ["apple", "banana", "cherry"];

// // Example of forEach
// // create a function that outputs the element with the index
// const result = fruits.forEach(function (item, index) {
//   //   console.log(`The element name is: ${item}, and its index is ${index}`);
//   return item;
// });
// console.log(result);

// 3. find
// Explain how find is used to search for the first element in an array that meets a condition.

// const numbers = [4, 9, 16, 25, 29];

// // find the element that has the total of 28 when u add the element to the index
// let first = numbers.find(function (num, index, array) {
//   return num + index === 100;
// });
// console.log(first);

// 4. filter
// Show how filter creates a new array containing all elements that pass the test implemented by the provided function.

// const scores = [85, 92, 49, 68, 100, 83];

// // Example of filter
// let passingScores = scores.filter(function (score) {
//   return score >= 70;
// });
// console.log(passingScores); // Output will be [85, 92, 100, 83]

// 5. map
// Discuss how map transforms the elements in the original array by applying a function to each element and returns a new array.

// const prices = [100, 25, 10, 50];

// // Example of map
// let taxIncludedPrices = prices.map(function (price) {
//   return price * 1.5; // Assuming a 50% tax rate
// });

// console.log("prices", prices);
// console.log("taxIncludedPrices", taxIncludedPrices);

// 6. Combining High Order Functions
// Demonstrate chaining high order functions to perform complex operations succinctly.

// const products = [
//   { id: 1, name: "Coffee", price: 9.99 },
//   { id: 2, name: "Tea", price: 4.99 },
//   { id: 3, name: "Juice", price: 7.49 },
// ];

// let discountedProducts = products
//   .filter(function (product) {
//     return product.price > 5;
//   })
//   .map(function (product) {
//     return {
//       id: product.id,
//       name: product.name,
//       price: product.price * 0.9, // Applying 10% discount
//     };
//   });
// console.log(discountedProducts);

// 7. Conclusion
// Recap the high order functions covered and discuss when to use each one.

// 8. Introduction to Reduce
// Explain how reduce accumulates an array's items into a single value using a given function.

// const numbers = [1, 2, 3, 4, 5];

// Example of reduce to sum all elements
// let sum = numbers.reduce(function (accumulator, current) {
//   accumulator.push(current + 2);
//   return accumulator;
// }, []);
// console.log("New array of el + 2", sum);

// Continue discussing chaining high order functions as previously outlined
