/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log(numbers[0])
console.log(numbers[4])
console.log(numbers[numbers.length - 1])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

console.log(numbers)

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
function calculateAverage(numbers) {
    var total = 0;
    var count = 0;

    numbers.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(numbers));


// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Though they differ in syntax, behavior, and built-in methods, Python lists and JavaScript arrays have certain commonalities. Which one to choose will rely on the particular linguistic requirements as well as the type of work being done.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const IT114L = {
    code: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: "1",
    numberOfStudents: "40"
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professor = "Job Lipat"
console.log(IT114L)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const myCourses = [
    {
        code: "IT114L",
        name: "Web Systems and Technologies (Laboratory)",
        units: 1,
        numberOfStudents: "40",
        professor: "Job Lipat"
    },
    {
        code: "IT114",
        name: "Web Systems and Technologies",
        units: 2,
        numberOfStudents: "41",
        professor: "Adomar Ilao",
    },
    {
        code: "CS107",
        name: "Information Management",
        units: 2,
        numberOfStudents: "40",
        professor: "Dahlia De Mesa"
    },
    {
        code: "CS107L",
        name: "Information Management (Laboratory)",
        units: 1,
        numberOfStudents: "20",
        professor: "Dahlia De Mesa"
    },
    {
        code: "CS120",
        name: "Structure of Programming Languages",
        units: 3,
        numberOfStudents: "24",
        professor: "Aurelia Delos Santos"
    },
    {
        code: "HUM039",
        name: "Ethics",
        units: 3,
        numberOfStudents: "27",
        professor: "Rogelio Valenzuela"
    },
    {
        code: "IT133",
        name: "Technopreneurship",
        units: 3,
        numberOfStudents: "26",
        professor: "Jonalyn Ebron"
    }
]



// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
const sum = myCourses.reduce((items, object) => {
    return items + object.units;
  }, 0);

  console.log(sum);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Although objects in JavaScript and dictionaries in Python share many similarities, their respective languages have different rules and methods that are reflected in their syntax and methods. Both are extensively and versatilely utilized in their own ecosystems for data organization and manipulation.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
const numbers2 = [...numbers]
numbers2.push(69)
console.log(numbers2)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
const courseCode = [...IT114L.code]
console.log(courseCode)
