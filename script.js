// Centralized JavaScript Management
// At most 1 JavaScript file containing all JavaScript code

// Create interactive web pages
// A website that includes at minimum 1 webpage connected to your JavaScript file

// Utilize descriptive variable names
// More than 1-character, descriptive variable names in your project

let welcomeMessage = "Hello, User!";
let age = 25;

// Integrate distinct data types
// Use of at least 2 variables of different data types including at int in your project

let isUserAdult = true;

// Implement Mathematical Operations
// Perform and store the result of at least 1 instance of mathematical operation using variables in your JavaScript project

let nextYearAge = age + 1;

// Create decision making with decision structures
// Create at least 1 'if' statement with an accompanying 'else' statement in your JavaScript code

if (isUserAdult) {
    console.log("User is an adult.");
} else {
    console.log("User is not an adult.");
}

// Utilize Logical Operators for Complex Condition Evaluation
// Apply at least one of the following logical operators: AND, OR, or NOT, to demonstrate their use in evaluating complex conditions.

let hasPermission = true;

if (isUserAdult && hasPermission) {
    console.log("User is an adult and has permission.");
} else {
    console.log("User is either not an adult or does not have permission.");
}

// Showcase JavaScript Output Techniques
// An output from your application printed to both the console and on the browser screen via the DOM

let outputMessage = document.createElement("p");
outputMessage.textContent = "This message is shown on the browser screen.";
document.body.appendChild(outputMessage);

console.log("This message is logged to the console.");
