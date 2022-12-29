// Example 3 - Array iteration

// Write a script to iterate over the fruits array with a for loop.
// For each array element print a string in the format element_number: element_value to the console.
// Element numbering must start from 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1) {
    console.log(`Number ${i+1}`, fruits[i]);
    console.log(`Number ${num}`, fruits[i]);
}

// Here you can also show the difference between starting a loop from 0 and 1