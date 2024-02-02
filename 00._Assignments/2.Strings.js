// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const twoNumbers = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(twoNumbers)
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const exerciseFour = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);
console.log(exerciseFour)
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;


// Show in the console the avg. with 5 decimals
const exerciseFive = ((one + two + three) / 3).toFixed(5)
console.log(exerciseFive)



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

// square bracket notation : 
const character = letters[2]

// letters.substring(2, 3)
// letters.slice(2, 3)
// letters
console.log(character)
// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const replaced = fact.replace("j","J")
console.log(replaced)

// --------------------------------------