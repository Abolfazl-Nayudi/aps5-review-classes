// console.log(2 > 4);
// console.log(10 < 20);
// console.log(2 >= 2);
// console.log(31 <= 32)
// console.log('hello' == 'world');

// loose equality

// console.log(10 == '10');
// console.log(10 != '11');

// strict equality
// console.log(10 === 10);
// console.log(10 !== '10');
// AND => &&
// console.log(false && true && true && true);
// OR => ||
// console.log(true || false || false || false);
// NOT => !
// const isPasswordStrong = true;
// console.log(!isPasswordStrong);
// console.warn('by bedeh');
// console.error('by bedeh');

// alert('hi there');
// const userAge = prompt('enter your age');
// alert(`the days of your life ${Number(userAge) * 365}`);

// console.log(typeof parseInt('20'));
// console.log(parseInt('20sf'));

// control flow

// const bool = false
// console.log(first)

// if(/* condition */){
//     // codes
// }

// let age = 3;
// if (age === 3) {
//   console.log(`you are so cute cause your age is ${age}`);
// }

// let age = 25;
// let hasLicense = true;
// if (age >= 18 && hasLicense) {
//   console.log('you can drive');
// }

// let value = Number(prompt('enter a value'));
// if (typeof value === 'number') {
//   console.log(value.toFixed(2));
// }

// if(/* condition */){
//    // read codes if the condition was true
// }else{
//     // read codes if the condition was false
// }

// let num = 11;
// if (num % 2 === 0) {
//   console.log('the number is even');
// } else {
//   console.log('the number is odd');
// }

// const isUserLggedIn = true;
// if (isUserLggedIn) {
//   alert('welcome dear user');
// } else {
//   alert('please login to continue');
// }

// let score = 10;

// if (score >= 90) {
//   console.log('Grade A');
// } else if (score >= 80) {
//   console.log('Grade B');
// } else if (score >= 70) {
//   console.log('Grade C');
// } else {
//   console.log('Grade D');
// }

const email = 'jasem@gmail.com';
const password = '1233234';

// if (email.indexOf('@gmail.com') !== -1) {
//   if (password.length >= 6) {
//     console.log('you singed up successfully');
//   } else {
//     console.log('your password is not strong enough');
//   }
// } else {
//   console.log('your email is not valid');
// }

// better way
// if (email.endsWith('@gmail.com')) {
//   if (password.length >= 6) {
//     console.log('you singed up successfully');
//   } else {
//     console.log('your password is not strong enough');
//   }
// } else {
//   console.log('your email is not valid');
// }

// ================================
// console.log(NaN === NaN);

// let userInput = Number(prompt('inter a number'));
// console.log(userInput);

// if (isNaN(userInput)) {
//   console.log('the input is not a number');
// } else {
//   console.log('the input is a number');
// }

// if (isNaN(userInput) === false) {
//   console.log('hi');
// }

// if (!isNaN(userInput)) {
//   console.log('hi');
// }

// const isLoggedIn = false;

// if (!isLoggedIn) {
//   console.log('you did not logged in into your account');
// }

// console.log(typeof parseInt('a234234234234'));
console.log(parseInt('a234234234234'));
