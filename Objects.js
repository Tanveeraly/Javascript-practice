//Objects: properties, methods, computed keys, shorthand syntax, destructuring, spread, copying, and immutability

//What is an object?

//Objects in Programming
// object is a programming concept used to represent a thing that has data (properties) and behavior (methods).
//example: A car can be represented as an object with properties like color, make, and model, and methods like start() and stop() that define its behavior.
//in javascript, an object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be any data type, including other objects or functions. Objects are used to store and organize data in a structured way, making it easier to work with complex information in programming.


const student={
    name: "Ali",
    "full name": "Ali Khan",//computed key
    age: 25,
    grade: "A",
    fees:{
        tuition: 5000,
        hostel: 2000
    },//nested object

    subjects: ["Math", "Science", "English"],//array of subjects

    isPassed: true,//boolean value


}

//to access the properties of an object, you can use either dot notation or bracket notation.

console.log(student.name); // Output: Ali
console.log(student["name"]); // Output: Ali
console.log(student["full name"]); // Output: Ali Khan


//Updateing Object Properties
//You can update the properties of an object by assigning a new value to the property using either dot notation or bracket notation.
student.age = 26; // Update age using dot notation
student["grade"] = "A+"; // Update grade using bracket notation

//freeze an object
//Object.freeze() method is used to freeze an object, preventing any modifications to its properties. Once an object is frozen, you cannot add, delete, or change its properties. This is useful when you want to create immutable objects that should not be altered after creation.
object.freeze(student);//or
student.grade.object.freeze(student);//


//shorthand syntax
//In JavaScript, shorthand syntax refers to a more concise way of writing code that achieves the same functionality as longer, more verbose code. It often involves using shorter expressions, omitting unnecessary keywords, or utilizing built-in features of the language to simplify code. Shorthand syntax can make code easier to read and write, but it's important to balance brevity with clarity to ensure that the code remains understandable.
//example
const student = { name, age }; // Shorthand for { name: name, age: age }
//for object 


//destructuring
//Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It provides a convenient syntax for unpacking data structures, making it easier to work with complex data. Destructuring can be used with both arrays and objects, and it helps improve code clarity by reducing the need for repetitive access to individual elements or properties.

//example
const {name,age,fees:{tuition,hostel}}=student;//destructuring object
const [subject1,subject2,subject3]=student.subjects;//destructuring array

//useses of destructuring
//1. Simplifying variable assignment
//2. Extracting data from objects and arrays
//3. Function parameters
//4. Swapping variables
//5. Default values

//example






