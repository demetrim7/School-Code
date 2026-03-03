console.log("hola");

let number = Math.random();
console.log(number);

const range = 33 - 3 + 1;
console.log(range); // We added 1 to the range to make sure we get to both endpoints of our range, not just the numbers in between.

number = Math.random() * (33 - 3) + 3; //Multiplying our random number by the range sets it to the right scale when selecting a random number.

let newNum = Math.floor(number);

console.log(newNum); //We use Math.floor rather than Math.round because we want to make sure to get a number between 3 and 33 and to make sure that it wont round up.

const adjustedNum = newNum; // We would add 3 to our number to mak sure our range is set back to 3-33. 

console.log(adjustedNum);