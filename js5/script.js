// const age = 20;
// const hasLicense = true;

// if (age >= 18 && hasLicense) {
//   console.log('you can drive');
// }else{

// }

// const firstName = '';
// console.log('hello' / 2);
// if ('hello' / 2) {
//   console.log('in if block');
// } else {
//   console.log('in else block');
// }

// const language = 'French';

// if (language === 'English') {
//   console.log('hi');
// } else if (language === 'Spanish') {
//   console.log('hola');
// } else if (language === 'French') {
//   console.log('bonjour');
// } else {
//   console.log('سلام علیکم و رحمه الله و برکاته');
// }

// const language = 'English';
// let greeting;
// switch (language) {
//   case 'French':
//     // console.log('hola');
//     greeting = 'hola';
//     break;
//   case 'English':
//     // console.log('hi');
//     greeting = 'hi';
//     break;
//   case 'Spanish':
//     // console.log('bonjour');
//     greeting = 'bonjour';
//     break;
//   default:
//     console.log('سلام علیکم و رحمه الله و برکاته');
// }

// console.log(greeting);

// const userInput = prompt('enter a fruit');
// let message;

// switch (userInput.toLowerCase()) {
//   case 'banana':
//     message = 'Bananas are yellow';
//     break;
//   case 'apple':
//     message = 'Apples are red or green';
//     break;
//   case 'orange':
//     message = 'Oranges are orange';
//     break;
//   default:
//     message = 'i do not know that fruit';
// }

// ======================= array

// let firstName = 'adfasdfa';
// let number = 23432;

// firstName[3] = 'd';
// console.log(firstName);

// let data = [10, 'hello', true, undefined, NaN];
// console.log(data);

// const names = ['mahdi', 'zahra', 'samira', 'reyhaneh', 'ali'];

// console.log(names.length);
// console.log(names[5]);
// names[1] = 'sahar';
// names[100] = 'jasem';
// names[6] = undefined;

// console.log(names);

// const students = [
//   'sama',
//   'mohsen غ',
//   'mahdi',
//   'mahsa',
//   ['sahar', 'rezvan', ['aghil', 'hanie', 'zahra']],
// ];

// students[4][2][0] = 'fatemeh';

// console.log(students);

// console.log(students[4]);

// const people = ['john', 'tom', ['jasem', 'abod', ['hasem']]];
// console.log(people[2][2][0]);

const fruits = ['banana', 'apple', 'orange'];

// const poppedData = fruits.pop();
// console.log(poppedData);

// const data = fruits.push('hello', 'bye');
// console.log(data);

// fruits.shift();
// fruits.unshift('hello');

// console.log(fruits);

// const firstName = 'asdf';
// const lastName = 'asdfads';

// console.log(firstName.concat(lastName));

// const firstNames = ['aghil', 'mahdi', 'vajihe', 'zahra'];

// const lastNames = ['nayudi', 'alikhani'];

// console.log(firstNames.includes('mahdi'));
// console.log(firstNames.indexOf('john'));
// firstNames.reverse();
// console.log(firstNames.slice(0, 2));

// console.log(firstNames);
// console.log(firstNames.concat(lastNames));

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.splice(3, 0, 'hello', 'bye');
// const conevertedData = numbers.slice();

// numbers.slice(1,4)

// const splicedData = conevertedData.splice(3, 0, 'hello', 'bye');
// console.log(splicedData);

// console.log(numbers);
// console.log(conevertedData);

// const arrayOfNames = ['mahdi', 'vajihe', 'zahra', 'aghil'];

// arrayOfNames.sort();
// console.log(arrayOfNames);

// const numbers = [234, 234, 123, 14, 12, 2, 561, 2342, 5, 14, 12];

// numbers.sort((a, b) => a - b);
// console.log(numbers);

// const str1 = 'hello';
// const str2 = 'hello';

// console.log(str1 === str2);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2);

// primitive data types => numbers, string, boolean, undefined, null
// reference data types => array, object

// const arr1 = [1, 2, 3];
// const arr2 = arr1.slice();

// arr2[0] = 'hello';

// console.log('arr1', arr1);
// console.log('arr2', arr2);
// console.log(arr1 === arr2);

// ============ const + arrays

// const numbers = [1, 2, 3];

// numbers[1] = 'mahdi bye bedeh';
// numbers = [234];
// console.log(numbers);

// const names = ['sahar', 'mozhdeh', 'maedeh', 'zahra aria', 'reyhaneh'];

// // names.sort();
// const copyData = names.slice();
// copyData.splice(4, 1);

// console.log(names);
// console.log(copyData);

// think about it
// function twoHalvesOfPerson(name) {
//   const firstHalf = name.slice(0, name.length / 2);
//   const secondHalf = name.slice(name.length / 2);

//   return [firstHalf, secondHalf];
// }

// console.log(twoHalvesOfPerson('zahra'));
// console.log(twoHalvesOfPerson('reyhaneh'));
// console.log(twoHalvesOfPerson('mahdi'));
// console.log(twoHalvesOfPerson('mohsen'));
