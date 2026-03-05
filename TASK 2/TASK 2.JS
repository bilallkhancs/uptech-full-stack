let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, curr) => acc+curr,0);
console.log("Sum of given numbers are:-", sum) 

numbers.push(6)
console.log("Number we get in array after pushing are :-", numbers)

numbers.shift()
console.log("After shifting an element in array we get:-",numbers)

let reversed=[...numbers].reverse()
console.log("After reversing we get:-", reversed)

let number = [1, 2, 3, 4, 5];
let check=number.includes(5)
console.log(check)

let multiplied = reversed.map(num => num * 2)
console.log("New array with numbers multiplied by 2:", multiplied)

function isGreaterThanThree(num) {
    return num > 3;
}
let greaterThan= numbers.filter(isGreaterThanThree)
console.log("Following are Numbers greater than 3:-", greaterThan)

function divisibleBy(num) {
    return num % 5;
}
let divisibleNumber= number.find(divisibleBy)
console.log("Divisible Number are:-", divisibleNumber)