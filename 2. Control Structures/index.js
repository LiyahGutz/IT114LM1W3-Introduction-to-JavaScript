/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
//const randomNumber = 15
// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
console.log(randomNumber)
if (randomNumber > 50) {
    console.log("more than fifty")
} else {
    console.log("less than fifty")
}
// TODO 2.2 Display whether the random number is odd or even
// Your code here
if ((randomNumber % 2) > 0) {
    console.log("odd number")
} else {
    console.log("even number")
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
s = ""
if ((randomNumber % 3) > 0) {
    console.log(randomNumber)
} else {
    s = "fizz"
    console.log(s)
}

if ((randomNumber % 5) > 0) {
    console.log(randomNumber)
} else {
    s = "buzz"
    console.log(s)
}

if (((randomNumber % 3) > 0) && ((randomNumber % 5) > 0)) {
    console.log(randomNumber)
} else {
    console.log("fizzbuzz")
}
let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
switch ((randomNumber % 2) > 0) {
    case true: 
        toDisplay = "Odd";
        break;
    case false: 
        toDisplay = "Even";
        break;
    default: 
        toDisplay = ""
        
}
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: I would use switch statements if I want to make my code comprehensive and understandable if the condition tatements are multiple.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let x = 0; x < n; x++) {
    console.log(x)
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;
let text = "";

while (list[i]) {
  text += (list[i] + "\n");
  i++;
}
console.log(text)

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: I would just move the while to the bottom and add do in the former place of while
do {
    text += (list[i] + "\n");
    i++;
} while (list[i]);
console.log(text)
  

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

for (const element of list) {
    console.log(element);
  }
console.log();

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

for (const fruit in list) {
  console.log(`${list[fruit]}`);
}
console.log()

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach((element) => console.log(element));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: When iterating over iterable objects, like as arrays or strings, use a for...of loop. This loop reads the property values directly and offers a more succinct syntax.
//When iterating over an object's enumerable properties, use a for...in loop. It works well with objects and may also be applied to arrays, though its use with the latter is less widespread.
//If you wish to iterate over each element in an array, use the.forEach() loop. It is made especially for arrays and comes with a callback function that may be used on every element.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
try {
    const numerator = Math.floor((Math.random() * 100) + 1);
    const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

    const quotient = numerator / denominator;
    console.log("Quotient is " + quotient)
}
catch (error) {
    console.log("Error caught: " + error);
} finally {
    console.log("cleaning up resources");
  }

