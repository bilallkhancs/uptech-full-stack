//TASK 1:
let name = "Hassan";
let age = 20;
let isStudent = true;
console.log("My name is " + name + ". I am " + age + " years old. Student: " + isStudent); //${keys} instead of ++

//TASK 2:
let str = "BILAL";
let num = 42; 
let bool = true; 
let values; 
let nul = null; 
console.log(typeof str); 
console.log(typeof num); 
console.log(typeof bool); 
console.log(typeof undef);
console.log(typeof nul); 

//TASK 3:
let num1 = 15;
let num2 = 5;
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));

//TASK 4:
Temperature in Celsius let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Celsius: " + celsius);
console.log("Fahrenheit: " + fahrenheit);

//TAKS 5:
let number = 4;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//TASK 6:
let marks = 85;
let grade;
if (marks >= 90)      grade = "A";
else if (marks >= 80) grade = "B";
else if (marks >= 70) grade = "C";
else if (marks >= 60) grade = "D";
else                   grade = "Fail";
console.log(grade);

//TASK 7:
let age = 20;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

//TASK 8:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//TASK 9:
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}