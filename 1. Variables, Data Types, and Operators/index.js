/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var a = "Hi Aaliyah"
console.log(a)

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let b = "Hehe"
console.log(b)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
//const c = 100
//const c = 200
// Syntax error happens
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: Scope of var is functional scope, whilst let and const are block scopes. However, let and var can be updated and redeclared, while const cannot.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const d = 27 % 7
console.log(d)
e = 5
e++
console.log(e)
f = 9
f--
console.log(f)
// Checkpoint 1.2 What operators did you use?
// Answer: Remainder, Increment and Decrement
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
string = "Aaliyah"
console.log("Hi " + string)
string += ". Whazzup"
console.log("Hi " + string)
// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation and shorthand assignment

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const g = true && false
console.log(g)
const h = true || false
console.log(h)
const i = !false
console.log(i)
// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND, OR, and NOT operators


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const elements = ["Fire", "Earth", "Air", "Water"]
console.log(0 in elements)
console.log(4 in elements)
console.log(elements)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: In JavaScript, the expression [] == false evaluates to false. JavaScript coerces the types when comparing an empty array to a boolean; the empty array is viewed as truthy and the comparison returns false.
// Your code here
elements == false
console.log(elements)