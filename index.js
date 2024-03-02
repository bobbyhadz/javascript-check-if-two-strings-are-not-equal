// EXAMPLE 1 - Check if two Strings are NOT equal

const a = 'one';
const b = 'two';

if (a !== b) {
  // 👇️ this runs
  console.log('✅ strings are NOT equal');
} else {
  console.log('⛔️ strings are equal');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Inequality operator examples

// console.log(5 !== '5'); // 👉️ true
// console.log('one' !== 'one'); // 👉️ false
// console.log('one' !== 'ONE'); // 👉️ true
// console.log('' !== ' '); // 👉️ true
// console.log(5 !== 5); // 👉️ false
// console.log(5 !== 10); // 👉️ true
// console.log(true !== true); // 👉️ false
// console.log(true !== false); // 👉️ true
// console.log([] !== []); // 👉️ true
// console.log({} !== {}); // 👉️ true
// console.log(null !== null); // 👉️ false
// console.log(undefined !== undefined); // 👉️ false
// console.log(NaN !== NaN); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking if a value is nullish (null or undefined)

// const a = null;

// if (a == null) {
//   // 👇️ this runs
//   console.log('a is null or undefined');
// } else {
//   console.log('a is not null and undefined');
// }

// if (a != null) {
//   console.log('a is not null and undefined');
// }
