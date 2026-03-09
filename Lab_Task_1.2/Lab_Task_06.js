alert("Welcome to the JavaScript Lab Task!");
console.log("Welcome to the JavaScript Lab Task!");
document.write("<h2>JavaScript Basics and User Interaction</h2>");

let studentName = "Sumaiya Akter Roshni";
let studentAge = 22;

let nextYearAge = studentAge + 1;
let studentInfo = "Student Name: " + studentName + " | Student Age: " + studentAge;

document.write("<h3>Part B: Variables and Operations</h3>");
document.write("<p>" + studentInfo + "</p>");
document.write("<p>Age next year: " + nextYearAge + "</p>");

let firstInput = prompt("Enter the first number:");
let secondInput = prompt("Enter the second number:");

let num1 = Number(firstInput);
let num2 = Number(secondInput);

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;

document.write("<h3>Part C: User Input and Type Casting</h3>");
document.write("<p>First Number: " + num1 + "</p>");
document.write("<p>Second Number: " + num2 + "</p>");
document.write("<p>Sum: " + sum + "</p>");
document.write("<p>Difference: " + difference + "</p>");
document.write("<p>Product: " + product + "</p>");

let checkInput = prompt("Enter a number to check even or odd:");
let checkNumber = Number(checkInput);

document.write("<h3>Part D: Conditional Statements</h3>");
if (checkNumber % 2 === 0) {
	document.write("<p>The number " + checkNumber + " is Even.</p>");
} else {
	document.write("<p>The number " + checkNumber + " is Odd.</p>");
}
