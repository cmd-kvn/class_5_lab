'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a,b){ //eslint-disable-line
  var total = a + b;
// return an array where the first element is the sum of a+b and second element is a concatenated string
  return [total, 'The sum of ' + a + ' and ' + b + ' is ' + total + '.'];
}

// Here is the test for sum(); uncomment it to run it

testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b){ //eslint-disable-line
  var total = a * b;
// return an array where the 1st element is the product of a,b and the 2nd element is a string
  return [total, 'The product of ' + a + ' and ' + b + ' is ' + total + '.'];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
// You may not use the arithmetic operators +, use sum(), and *, use multiply, in this function

// [0] first element is the sum of those three numbers
  var sumAB = sum(a, b); // function returns array [sum, string], need sumAB[0]

  var totalSum = sum(sumAB[0], c); // function returns array [sum, string], need totalSum[0] for int sum, totalSum[1] for string
  console.log('totalSum[0]: ', totalSum[0]);
  console.log('totalSum[1]: ', totalSum[1]);

// [1] second element is the product of those three numbers
  var productAB = multiply(a, b); // function returns array [product, string], need productAB[0]

  var totalProduct = multiply(productAB[0], c); // function returns array [product, string], need totalProduct[0] for int product, totalProduct[1] for string
  console.log('totalProduct[0]: ', totalProduct[0]);
  console.log('totalProduct[1]: ', totalProduct[1]);

// [2] third element is "4 and 7 and 5 sum to 16." = a and b and c sum to totalSum.
  console.log('third element: ', 'a + " and " + b + " and " + c + " sum to " + totalSum[0] + "."');
// [3] fourth element is "The product of 4 and 7 and 5 is 140." = the product of a and b and c is totalProduct
  console.log('fourth element: ', '"The product of " + a + " and " + b + " and" + c + " is " + totalProduct[0] + "."');

// return array [0, 1, 2, 3]
  console.log('look: ', totalSum[0], totalProduct[0], a + ' and ' + b + ' and ' + c + ' sum to ' + totalSum[0] + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + totalProduct[0] + '.');

  return [totalSum[0], totalProduct[0], a + ' and ' + b + ' and ' + c + ' sum to ' + totalSum[0] + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + totalProduct[0] + '.'];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
// the first element is the sum of the numbers in the array,
// numbers = testArray[0]...testArray[2]
// sum function returns array, value is stored at first element
  var sumIndex0Index1 = sum(testArray[0], testArray[1]); //returns array, value is stored at first element
  var sumToArray = sum(sumIndex0Index1[0], testArray[2]); //returns array, value is stored at first element
  console.log('sumIndex0Index1 array: ', sumIndex0Index1);
  console.log('sumToArray array:', sumToArray);
// the second element is a string = '2,3,4 was passed in as an array of numbers, and 9 is their sum.'
  var returnIndex1Element =  testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + sumToArray[0] + ' is their sum.';
  console.log('returnIndex1Element is: ', returnIndex1Element);
// returns an array [sum, string]
  return [sumToArray[0], returnIndex1Element];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
=
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
  // the first element is the product of the numbers in the array,
  // numbers = testArray[0]...testArray[2]
  // product function returns array, value is stored at first element
  var productIndex0Index1 = multiply(testArray[0], testArray[1]); //returns array, value is stored at first element
  var productToArray = multiply(productIndex0Index1[0], testArray[2]); //returns array, value is stored at first element
  console.log('productIndex0Index1 array: ', productIndex0Index1);
  console.log('productToArray array:', productToArray);
// the second element is a string = 'The numbers 2,3,4 have a product of 24.'
  var returnIndex1Element =  'The numbers ' + testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' have a product of ' + productToArray[0] + '.';
  console.log('returnIndex1Element is: ', returnIndex1Element);
// returns an array [product, string]
  return [productToArray[0], returnIndex1Element];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
