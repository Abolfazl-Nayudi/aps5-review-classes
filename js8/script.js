// const members = ['jasem', 'alireza', 'maedeh', 'nazanin', 'mohadese'];

// let arrToStr = '';

// for (const name of members) {
//   arrToStr += name + ' ';
// }

// console.log(arrToStr);

// const str = 'hello';

// for (const item of str) {
//   console.log(item);
// }

// const data = [
//   ['apple', 'orange', 'banana'],
//   ['carrot', 'potato', 'broccoli'],
//   ['dog', 'cat', 'rabbit'],
// ];

// for (const array of data) {
//   console.log('array ', array);

//   for (const item of array) {
//     console.log('item ', item);
//   }
// }

// =======================================

// function declaration
// function greet(name) {
//   return `hi ${name}`;
// }

// function expression

// const greet = function (name) {
//   return `hi ${name}`;
// };

// console.log(greet('jasem'));
// console.log(greet('abod'));

// arrow function

// const greet = (name) => {
//   return `hi ${name}`;
// };

const greet = (name) => `hi ${name}`;

// const welcome = () => {
//     return 'welcome'
// }

console.log(greet('alireza'));

// const add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;

// console.log(add(3, 9));

// const isEven = (num) => {
//   return num % 2 === 0;
// };

const isEven = (num) => num % 2 === 0;

// console.log(isEven(5));
// console.log(isEven(6));

// array methods
// forEach

// const members = ['jasem', 'alireza', 'maedeh', 'nazanin', 'mohadese'];

// // members.slice(1,5)

// const upperCasedMembers = [];

// members.forEach(function (name) {
//   upperCasedMembers.push(name.toUpperCase());
// });

// members.forEach((name) => {
//   upperCasedMembers.push(name.toUpperCase());
// });

// console.log(upperCasedMembers);

// const arrOfStr = ['apple', 'banana', 'cherry', 'date', 'durian', 'elderberry'];

// const startsWidthD = [];

// arrOfStr.forEach(function (item) {
//   console.log(item);
//   if (item[0] === 'd') {
//     startsWidthD.push(item);
//   }
// });

// arrOfStr.forEach((item) => {
//   console.log(item);
//   if (item[0] === 'd') {
//     startsWidthD.push(item);
//   }
// });

// console.log(startsWidthD);

// const arrOfStr = ['apple', 'banana', 'cherry', 'date', 'durian', 'elderberry'];

// const slicedArray = arrOfStr.slice(1, 5);
// console.log(slicedArray);

// const iteretedArray = arrOfStr.forEach((item) => {
//     upperCasedMembers.push(item.toUpperCase());
// });

// console.log(iteretedArray);

// const arrays = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8],
// ];

// arrays.forEach((arr) => {
//   console.log(arr);

//   arr.forEach((item) => {
//     console.log(item);
//   });
// });

// ================================

// const arrOfStr = ['apple', 'banana', 'cherry', 'date', 'durian', 'elderberry'];

// const upperCasedItems = arrOfStr.map((item) => {
//   //   console.log(item.toUpperCase());
//   return item.toUpperCase();
// });

// console.log(upperCasedItems);

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

const strings = ['apple', 'banana', 'cherry'];

// const lengths = strings.map((str) => {
//   return str.length;
// });
// const lengths = strings.map((str) => str.length);

// console.log(lengths);

const numbers = [1, 2, 3];
// array farzi = ['hello',2,'hello']
// const evenNumbers = numbers.map((num) => {
//   if (num === 2) {
//     return num;
//   }

//   return 'hello';
// });

// console.log(evenNumbers);
