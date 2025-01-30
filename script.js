// script.js

// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function(){
    // Your JavaScript code goes here

    // Select the header element
    const header = document.querySelector("header");

    // Add an event listener to the header element
    header.addEventListener("click", function() {
        // Display an alert when the header is clicked
        alert("Header clicked!");
    });

    // Variables: Declare and assign values
    let name = "John";
    let age = 30;

    // Basic data types: String, Number, Boolean
    let greeting = "Hello";
    let pi = 3.14;
    let isStudent = true;

    // Conditional statements: if, else if, else
    if (age < 18) {
        console.log("You are a minor.");
    } else if (age >= 18 && age < 65) {
        console.log("You are an adult.");
    } else {
        console.log("You are a senior citizen.");
    }

    // Functions: Define and call
    function sayHello() {
        console.log("Hello, world!");
    }

    sayHello(); // Call the function

    // DOM manipulation: Change text content
    const mainHeading = document.querySelector("h1");
    mainHeading.textContent = "Updated Title";

    // Events and event listeners
    const button = document.querySelector("button");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });

    // Arrays: Declare and manipulate
    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits[0]); // Access the first element

    // Loops: for loop
    for (leti = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    // Objects: Create and access properties
    let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
    };

    console.log (person.firstName); // Access object property

    // Example of a simple function that takes parameters
    function addNumbers(a, b) {
    return a + b;
    }
    let result = addNumbers(5, 3); // Call the function with arguments
    console.log("Result:", result);
});
