//Solution 1: Print all even numbers from 0 – 10
//function to print out even numbers
//get start and end range from user
function getEvenNumber(firstNum, LastNum) {
  //for loop and increment by +1
  for (i = firstNum; i <= LastNum; i++) {
    //divide value by 2
    //if remainder is zero then it is an even number
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
//test data: getEvenNumber(0, 10)
// Expected output: 0, 2, 4, 6, 8, 10

//Solution 2: Print a table containing multiplication tables
//function to Print a table containing multiplication tables
//get range from user
function MultiplicationTable(fNum, lNum) {
  //get number to multiply from user
  let number = prompt("Enter a number:  ");
  //creating a multiplication table with for loop
  for (i = fNum; i <= lNum; i++) {
    //multiply each value
    let result = i * number;
    //display the result
    console.log(`${number} * ${i} = ${result}`);
  }
}
//call the function and pass in the arguments
MultiplicationTable(1, 12);
//result depends on figure enterd by user

//Solution 3: Create a length converter function
//function to convert Kilometer to miles
function ConvertKmToMiles() {
  //get input from user
  let kilometer = parseFloat(prompt("Enter a number:  "));
  //multiply the KM value entered by 0.62137 which is = 1KM
  let miles = kilometer * 0.62137;
  //display the result
  console.log(`${number} Kilometers = ${miles} miles`);
}
//calling the function
ConvertKmToMiles();
//result depends on figure enterd by user

//Solution 4: Calculate the sum of numbers within an array
//function to sum the numbers within an array
function sumArray(array) {
  //sum is initialized
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    //add all items in the array to the sum variable
    sum += array[i];
  }
  //display the result
  console.log(sum);
}

//call the function and pass in the array
sumArray([15, 3.6, 6, -7, 9]);
// Expected output: 26.6

//Solution 5: Create a function that reverses an array
//function that reverses a numerical array
function reverseArray(arr) {
  //array method to reverse the array
  let reversed = arr.reverse();
  //display the result
  console.log(`Reversed array is : ${reversed}`);
}

//call the function and pass in the array
reverseArray([1, 3.6, 6, 4, 9]);
// Expected output: Reversed array is : 9,4,6,3.6,1

//Solution 6: Sort an array from lowest to highest
//function that sorts a numerical array
function sortArray(arr) {
  //array method to sort the array in an ascending order
  let sorted = arr.sort(function (a, b) {
    return a - b;
  });
  //display the result
  console.log(`sorted array is  : ${sorted}`);
}

//call the function and pass in the array
sortArray([17, 33, 8, 24, 12]);
// Expected output: sorted array is  :  8,12,17,24,33

//Solution 7: Create a function that filters out negative numbers
//function that filters out negative numbers
function filterNegativeNumbers(array1) {
  //array method that filters an array
  let filtered = array1.filter((num) => num >= 0 && num % 1 === 0);
  //disply the result
  console.log(filtered);
}

//call the function and pass the array
filterNegativeNumbers([10, -2, 18, 26, -12]);
// Expected output:[10, 18, 26]

//Solution 8: Remove the spaces found in a string
//function to remove whitespaces from a string
function removeWhitespace(text) {
  //method to return a new string
  return text.replace(/\s+/g, "");
}
//call the function and pass in the string
removeWhitespace("   A n thon ia  ");
// Expected output: 'Anthonia'

//Solution 9: Return a Boolean if a number is divisible by 10
//function to Return a Boolean if a number is divisible by 10
function TrueOrFalse() {
  //take input from user
  let number = prompt("Enter a number:  ");
  //if value is divisible by 10 and has no remainder, return true
  if (number % 10 === 0) {
    return true;
  } else {
    //if value is not divisible by 10 and has a remainder, return false
    return false;
  }
}

//call the function
TrueOrFalse();

//Solution 10: Return the number of vowels in a string
//function to count the number of vowels in a string
function countVowel() {
  //take input from user
  let string = prompt("Enter a string: ");
  //method to count the vowels by using RegEx to exclude it
  let count = string.match(/[aeiou]/g).length;
  // let letters = string.match(/[aeiou]/g);
  //display the result
  console.log(`The number of vowels in ${string} is ${count} `);
  // console.log(
  //   `The number of vowels in ${string} is ${count} and the letters are: ${letters} `
  // );
}
//calling the function
countVowel();
//result depends on string enterd by user
