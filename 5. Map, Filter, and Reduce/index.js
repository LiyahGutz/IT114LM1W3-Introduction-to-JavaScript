/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squared = numbers.map(item => item ** 2);
console.log(squared);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens)
// TODO 4.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum)
// TODO 4.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upper = words.map(item => item.toUpperCase());
console.log(upper);
// TODO 4.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const four = words.filter(item => item.length > 4);
console.log(four)
// TODO 4.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const single = words.reduce(function (one, item) {
    return one + item;
  });
  console.log(single)
// Checkpoint 4.1 Summarize what map, filter, and reduce do
// Answer: In JavaScript, reduce uses an iterative function to collect array values into a single result, filter creates a new array with elements that match a particular criterion, and map modifies each element of an array according to a provided function. The compact and expressive array manipulation made possible by these higher-order functions improves the readability and maintainability of the code.
