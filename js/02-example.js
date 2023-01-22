// Example 2 - Storagе

// Write a Storage class that creates objects for managing a warehouse of goods. When called, it will receive one argument - the initial array of goods, and write it to the items property.

// Add class methods:

// getItems() - returns an array of products.
// addItem(item) - receives a new product and adds it to the current ones.
// removeItem(item) - receives the product and, if it exists, removes it from the current.

class Storage {
    constructor(arr){
        this.items = arr
    }
    getItems(){
        return this.items;
    }
    addItem(item){
        this.items.push(item)
    }
    // removeItem(item){
    //     if(this.items.includes(item)){
    //         const idx = this.items.indexOf(item);
    //         this.items.splice(idx,1)
    //     }
    // }
    removeItem(item){
        const idx = this.items.indexOf(item);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
        // -(-1+1) = -0
        // -(0+1) = -1
        // if(idx !== '')
        // Boolean(~idx)
        // !!~idx
        console.log(!!~idx);
        if(!!~idx){
            this.items.splice(idx,1)
        }else{
            console.log('Do not exist');
        }
    }
}

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]