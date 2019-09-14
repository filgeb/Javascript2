'use strict';

// 2.1

function foo(func) {
  console.log("Hello, I'm a foo function that will run a bar function: ");
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;

//2.2
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  // console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log(numbers);

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 3 === 0 && numbers[j] % 5 === 0) {
      // console.log(numbers[j]);
      threeCallback(numbers[j]);
      fiveCallback(numbers[j]);
    } else if (numbers[j] % 3 === 0) {
      threeCallback(numbers[j]);
    } else if (numbers[j] % 5 === 0) {
      fiveCallback(numbers[j]);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log('This number is divisible by three: ' + number);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log('This number is divisible by five: ' + number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;

//2.3
// While loop
function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
// for loop
repeatStringNumTimes('abc', 3);

function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  for (i = 0; i < 5; i++) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

repeatStringNumTimes('abc', 3);
// Do while loop
function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  do {
    accumulatedStr += str;
    num--;
  } while (num > 0);

  return accumulatedStr;
}

console.log(repeatStringNumTimes('abc', 3));

//2.4
function Dog() {
  // add your code here
  this.name = 'Ema';
  this.color = 'white';
  this.numLegs = 4;
}

const hound = new Dog();
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;

//2.5
function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  // Replace this comment and the next line with your code
  // console.log(arr, product);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }

  return product;
}

const result = multiplyAll([[5, 10], [15, 20], [25, 40]]);
console.log(result);

// Do not change or remove anything below this line
module.exports = multiplyAll;

//2.7
const x = 9;
function f1(val) {
  val = val + 1;
  // console.log(val);
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);
/*  The first function takes an integer declared as a constant, and even though we try to change its value, it stays the same and does not change when used outside of the function.The second function takes an object previously declared as a constant, and when we try to change it and see the change outside of the function, we succeed.This is due to the fact that primitive data types in JavaScript (booleans, numbers, and strings)are passed by value, while objects are called by sharing.*/

//step3
function createBase(base) {
  // Replace this comment and the next line with your code
  // console.log(base);
  return function(x) {
    return base + x;
  };
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;

//Bonus
const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// const values = [3, 6, 7, 4, 5, 9, 6, 5];

function makeUnique(arr) {
  // Replace this comment and the next line with your code
  // console.log(arr);
  return arr.filter((v, i) => arr.indexOf(v) === i);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
