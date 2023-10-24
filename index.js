//Problem 1: Write a function to calculate the area of a triangle.

function triangle(height, base) {
  if (base <= 0 || height <= 0) {
    return "Both base and height must be positive numbers.";
  }
  const area = (1 / 2) * (height * base);
  return area;
}
console.log(triangle(-5, 6));
console.log(triangle(3, 4));

// Problem 2: Write a function to convert degrees to radians.

function convertDegreesToRadians(degree) {
  const pai = 3.14;
  const radians = degree * (pai / 180);
  return radians;
}
console.log(convertDegreesToRadians(1));
console.log(convertDegreesToRadians(4));

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else if (number < 0) {
    return "Factorial is undefined for negative numbers.";
  } else {
    return number * calculateFactorial(number - 1);
  }
}

// Example usage:
const num = 4;
const factorial = calculateFactorial(num);
console.log(`The factorial of ${num} is ${factorial}`);

//  Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
const num1 = 4;
const isNumPrime = isPrime(num1);
console.log(isNumPrime);

//Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [11, 12, 13, 14, 15];

function mergeArrays(arr1, arr2) {
  const newArray = arr1.concat(arr2);
  return newArray;
}
const result = mergeArrays(arr1, arr2);
console.log(result);

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "This is Leap year";
  } else {
    return "Not leap year";
  }
}
console.log(isLeapYear(2023));

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
const arr = [4, 5, 4, 2, 7, , 3, 8, 12, 21, 12, 45, 1, 5, 9, 6, 9, 7, 1, 10];
function removeDuplicates(arr) {
  const newArray = arr.filter((value, index) => arr.indexOf(value) === index);
  return newArray;
}
console.log(removeDuplicates(arr));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(f) {
  const celsius = (5 / 9) * (f - 32);
  return celsius;
}
console.log(convertToCelsius(34));

// Problem 9: Write a function to find the maximum of five numbers.

function findMaxNumber(num1, num2, num3, num4, num5) {
  const maxNumber = Math.max(num1, num2, num3, num4, num5);
  return maxNumber;
}
console.log(findMaxNumber(23, 120, 43, 2, 9));

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(string) {
  if (string.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Example usage:
const string1 = "JavaScript";
const result1 = evenOdd(string1);
console.log(`'${string1}' = ${string1.length} has an ${result1} number of characters.`);

const string2 = "Hello";
const result2 = evenOdd(string2);
console.log(`'${string2}' = ${string2.length} has an ${result2} number of characters.`);
