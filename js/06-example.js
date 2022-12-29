// Example 6 - Arrays and Strings
// Write a script that "unwraps" a string (reverse letter order) and prints it to the console.

// const string = 'Welcome to the future';

const string = 'Welcome to the future';
// const arr = string.split('');
// const rev = arr.reverse();
// const result = rev.join('');
const result = string.split('').reverse().join('');
console.log(result);