// const person1 = {
//     firstname: "ALI",
//     lastname: "KHAN",
//     age: 30,
//     isEmployed: false,
//     'home address': "rohri",
//     sayHello: function() {
//         console.log("hello my name is bilal");
//     },
// };
// person1.sayHello();

// console.log(person1.firstname)
// console.log(person1.lastname)
// console.log(person1.age)
// console.log(person1.isEmployed)

// person1.age = 40;
// person1.isEmployed = true;
// console.log(person1);
// console.log(person1["home address"])

// console.log(Object.keys(person1));
// console.log(Object.values(person1));
// for(let keys in person1){
//     console.log(keys,person1[keys])
// }

// Object Properties
// Object Methods
// Object this
// Object Display
// Object Constructors
// Object Iterations
// Object Get & Set
// Object Reference
// Object Prototypes
// Object Management
// Object Protection

// const {firstname , age} = person1;
// console.log(firstname , age);

// //TASK 1:
// let name = "Hassan";
// let age = 20;
// let isStudent = true;
// console.log("My name is " + name + ". I am " + age + " years old. Student: " + isStudent); //${keys} instead of ++

// //TASK 2:
// let str = "BILAL"; // String
// let num = 42; // Number
// let bool = true; // Boolean
// let values; // Undefined (declared but not assigned)
// let nul = null; // Null (explicitly set to nothing) // Checking their types
// console.log(typeof str); // string
// console.log(typeof num); // number
// console.log(typeof bool); // boolean
// console.log(typeof undef); // undefined
// console.log(typeof nul); // object (special case in JS)

// //TASK 3:
// let num1 = 15;
// let num2 = 5;
// console.log("Addition: " + (num1 + num2));
// console.log("Subtraction: " + (num1 - num2));
// console.log("Multiplication: " + (num1 * num2));
// console.log("Division: " + (num1 / num2));

// //TASK 4:
// Temperature in Celsius let celsius = 25;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log("Celsius: " + celsius);
// console.log("Fahrenheit: " + fahrenheit);

// tostring, shift, unshift, splice, slice

// let num = [1, 2, 3, 4, 5]
// let b=num.toString()
// console.log(b, typeof b)
// let c=num.join(" & ")
// console.log(c, typeof c)
// num.pop()
// console.log(num,)  //r
// num.push("6")
// console.log(num)
// let r=num.shift()
// console.log(r, num)
// let d=num.unshift("0")
// console.log(d, num)
// delete num[3]
// console.log(num)
// let g=num.slice(1,3) //specific value get
// console.log(g)
// num.splice(1,0, "8","9") //specific position ma alter krta
// console.log(num)
// //MAP FILTER REDUCE(HIGH ORDER ARRAY METHODS)(TIME MANAGEMENT)

//loops in javascript

// for(i=0; i<=10; i++){
//     console.log(i)
// }

// let obj = {
//     BILAL:40,
//     WAHEED:50,
//     ALI:60,
//     HASSAN:70,
//     AHMAD:80
// }
// for (let a in obj){
//     console.log("Marks of " + a + " are " + obj[a])
// }

// for (let b of "Bilal"){
//     console.log(b)
// }

// let n=prompt("ENTER VALUE OF n")
// n=Number.parseInt(n)
// i=0
// // while(i<n){                   ////pahly condition check hoti phir block run hota
// //     console.log(i)
// //     i++
// // }

// do{            //pahly block run hota phir condition check hoti
//     console.log(i)
//     i++;
// }while(i<=n)

//FUNCTION: BLOCK OF CODE DESIGN TO PERFORM A PARTICULAR TASK<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//SYNTAX:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,
// function myfunc(paramenter1, param2){  
//code(return)
// }
// function avgmarks(f, g){
//     console.log("YOU ARE DONE")
//     return (f+g)/2 
// }


// let a=3
// let b=4
// let c=5
// console.log("AHMAD AVAERAGE MARKS IS", avgmarks(a, b)) //FUNCTION KO INVOKE KRNA ZARORI HAI
// console.log("AHMAD AVAERAGE MARKS IS", avgmarks(b, c))
// console.log("AHMAD AVAERAGE MARKS IS", avgmarks(a, c))

// //=> arrow fucntion<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const sum = (p, q)=>{  
//     return p+q
// }
// console.log(sum(10,10))

// function greeting() {
//     console.log("MY NAME BILAL")
//     return 0
// }
// greeting(); //it will only print console<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// console.log(greeting()) //it will also return return type as 0<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function addNumber(...num) { //rest operator and spread operator:jahan ap ko array ko kholna prdta<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//     let sum = 0;                 //spread:array ya object pr laga sahkty spread opera<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//     for (let n of num) {             //rest:boht si individual values arahi hoti or unko attach krna <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//         sum += n;
//     }
//     console.log(sum);

// }

// addNumber(1,2);
// addNumber(1,2,3);
// addNumber(1,2,3,4);
// addNumber(1,2,3,4,5);
// addNumber(1,2,3,4,5,6);

// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8]
// const [first, second,...num] =arr1
// // const [3, 4] =arr1
// console.log(first, second,num)
// const ans=[...arr1, ...arr2]
// console.log(ans)

// //arrow function<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const addNumber = (num1, num2)=>{ //num1+num2 no need curly brac
//     num1+num2
// }
// console.log(addNumber(1, 1))

// const squareNumber = num=> num*num   //second and popular mthod
// console.log(squareNumber(6))

// //example
// let arr3=[3,5,1,2,4]
// arr3.sort((a,b)=>a-b)
// console.log(arr3)

// const greetings=()=>({name:"Bilal", age:20})
// console.log(greetings())

//IIFE:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// (function greeting(){
//     console.log("Greet");
// })();

// (()=>{
//     console.log("greet")
// })()

//CALLBACK FUNCTION PASSED AS AN ARGUMENTS TO THE ANOTHER FUNCTION. RECIEVE HIGH ORDER FUNCTION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//JavaScript is asynchronous it doesn’t wait for tasks like API calls, file reading, timers<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function greet(){
//     console.log("hi everyone")
// }
// function dance(){
//     console.log("everyone")
// }
// function meet(callback){
//     console.log("bad boy")
//     callback()
//     console.log("my name is...")
// }
// meet(greet)
// meet(dance)

//FOR EACH::<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const arr5=[1,4,2,"bilal",5]
// arr5.forEach((number)=>{
//     console.log(number)
// })

// //REDUCE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const ... = product.reduce((accumulator,currentValue)=>{
//     if currentValue instock
//     return accumulator+currentValue.price
//     else
//         return accumulator
// },0)

// console.log(...)

//TASK:1<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let a = 12, b = 25, c = 9;
// let largest = Math.max(a, b, c);
// console.log("Largest:", largest);

// //TASK2:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let num = -5;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }
// //TASK3:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let correctUsername = "admin";
// let correctPassword = "1234";

// let username = "admin";
// let password = "1234";

// if (username === correctUsername && password === correctPassword) {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Credentials");
// }
// //TASK4:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let units = 250;
// let bill = 0;

// if (units <= 100) {
//     bill = units * 10;
// } else if (units <= 200) {
//     bill = (100 * 10) + (units - 100) * 15;
// } else {
//     bill = (100 * 10) + (100 * 15) + (units - 200) * 20;
// }

// console.log("Total Bill:", bill);
// //TASK5:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// for (let i = 2; i <= 50; i += 2) {
//     console.log(i);
// }
// //TASK6:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// for (let i = 20; i >= 1; i--) {
//     console.log(i);
// }
// //TASK7:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let n = 5;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }

// console.log("Factorial:", factorial);
// //TASK8:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let number = 12345;
// let digits = number.toString().length;
// console.log("Digits:", digits);
// //TASK9:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
// }
// console.log("Sum of Even Numbers:", sum);
// //TASK10:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let numCheck = 29;
// let isPrime = true;

// if (numCheck <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(numCheck); i++) {
//         if (numCheck % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// console.log(isPrime ? "Prime" : "Not Prime");
// //TASK11:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let balance = 5000;
// let withdraw = 2000;

// if (withdraw <= balance) {
//     balance -= withdraw;
//     console.log("Remaining Balance:", balance);
// } else {
//     console.log("Insufficient balance");
// }
// //TASK12:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let password = "StrongPass1";
// let hasNumber = /\d/.test(password);
// let hasUpper = /[A-Z]/.test(password);

// if (password.length >= 8 && hasNumber && hasUpper) {
//     console.log("Strong Password");
// } else {
//     console.log("Weak Password");
// }

// //TASK13:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
