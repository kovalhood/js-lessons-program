// Example 3 - Array of objects

// Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone. 
// The function calculates and returns the total cost of stones with the same name, price and quantity from the object

// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 3 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 200, quantity: 2 },
// ];

const stones = [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 400, quantity: 7 },
    { name: 'Rubble', price: 200, quantity: 2 },
];

const calcTotalPrice = function (stones, stoneName) {
    let result;

    for (const stone of stones) {
        if (stone.name === stoneName) {
        result = stone.price * stone.quantity
        }
    }

    return result
}

let total = calcTotalPrice(stones, 'Diamond');
let total2 = calcTotalPrice(stones, 'Sapphire');
console.log(total, total2);