// DRY => don't repeat yourself

// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

// function greet(){
//     console.log('welcome')
// }

// greet()
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()

// for(initialization; condition; couter){

// }

// console.log('before loop');

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log('after loop');

// for (let i = 0; i < 10; i++) {
//   console.log('hello world');
// }

// for (let i = 0; i < 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 30; i > 0; i -= 5) {
//   console.log(i);
// }

// const fruits = ['apple', 'banana', 'orange', 'cherry'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[5]);

// for (let i = 0; i < fruits.length; i++) {
//   //   console.log(i);
//   console.log(fruits[i].toUpperCase());
// }

// const numbers = [1, 2, 3, 3, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);

//   //   sum = sum + numbers[i];
//   sum += numbers[i];
//   //   console.log(sum);
//   console.log(i);
// }

// const colors = ['red', 'green', 'blue', 'orange', 'yellow'];

// for (let i = colors.length - 1; i >= 0; i--) {
//   console.log(colors[i]);
// }

// wrong
// function fiveRandomNumberGenerator() {
//     const arrOfRandomNumbers = []
//     arrOfRandomNumbers.push(Math.floor(Math.random() * 10 + 1))
//     arrOfRandomNumbers.push(Math.floor(Math.random() * 10 + 1))
//     arrOfRandomNumbers.push(Math.floor(Math.random() * 10 + 1))
//     arrOfRandomNumbers.push(Math.floor(Math.random() * 10 + 1))
//     arrOfRandomNumbers.push(Math.floor(Math.random() * 10 + 1))
//     return arrOfRandomNumbers
// }

// function fiveRandomNumberGenerator() {
//   const arrOfRandomNumbers = [];
//   for (let i = 0; i < 5; i++) {
//     const randomNum = Math.floor(Math.random() * 10) + 1;
//     arrOfRandomNumbers.push(randomNum);
//   }
//   return arrOfRandomNumbers;
// } // [2,4,1,9,6]

// console.log(fiveRandomNumberGenerator());

// ================nested loop ================

// console.log('before');

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log('after');

// for (let i = 0; i < 5; i++) {

//   console.log('value of i: ', i);

//   for (let j = 0; j < 3; j++) {
//     console.log('    the value of j: ', j);
//   }

// }

// iteration 1
// i = 0
// j = 0

// iteration 2
// i = 0
// j = 1

// interation3
// i = 0
// j = 2

///

// i = 1
// i = 2

// const nestedArray = [
//   ['hello', 'world'],
//   ["how're", 'you'],
// ];

// console.log(nestedArray[0][0]);

// for (let i = 0; i < nestedArray.length; i++) {
//   console.log(nestedArray[i]);

//   for (let j = 0; j < nestedArray[i].length; j++) {
//     console.log(nestedArray[i][j]);
//   }

// }

// i = 0
// j = 1

// i = 1
// j = 0

// ====================== while loop

// for(){

// }

// let userInput;
// while (userInput !== 'exit') {
//   userInput = prompt('Enter a value (type "exit" to quit):');
//   console.log('You entered:', userInput);
// }

// const evenNumbers = [];
// let i = 0;

// while (true) {
//   if (i % 2 === 0) {
//     evenNumbers.push(i);
//   }

//   i++;

//   if (i === 200) {
//     break;
//   }
// }

// console.log(evenNumbers);
