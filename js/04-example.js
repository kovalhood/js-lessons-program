// Example 4 - Complex tasks

// Write a script for managing a personal account of an Internet bank. 
// There is an account object in which it is necessary to implement methods for working with balance and transaction history.

// /*
//  * There are only two types of transaction.
//  * You can deposit or withdraw money from your account.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',

};

const account = {
    // Current account balance
    balance: 0,

    // Transaction History
    transactions: [{
        amount: 1000,
        type: 'deposit',
        id: 1663783742100
    }],

    /*
    * Method creates and returns a transaction object.
    * Accepts amount and type of transaction.
    */
    createTransaction(amount, type) {
        const transaction = {
            amount,
            type,
            id: Date.now(),
        }
        return transaction
    },

    /*
    * The method responsible for adding the amount to the balance..
    * Accepts the amount of the transaction.
    * Calls createTransaction to create a transaction object
    * then adds it to the transaction history
    */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount
    },

    /*
    *The method responsible for withdrawing the amount from the balance.
    * Calls createTransaction to create a transaction object
    * then adds it to the transaction history.
    *
    * If amount is greater than the current balance, display a message
    * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
    */
    withdraw(amount) {
        if (this.balance < amount) {
            console.log('Not enough money');
            return;
        }
        if (amount <= 200) {
            console.log('You can take more');
            return
        }

        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;

    },

    /*
   * The method returns the current balance
   */
    getBalance() {
        alert(this.balance);
    },

    /*
    * The method searches and returns the transaction object by id
    */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                console.log(transaction);
            }
        }
    },

    /*
    * The method returns the amount of funds
    *a specific type of transaction from the entire history of transactions
    */
    getTransactionTotal(type) {
        console.log(type);
        let total = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        }
        return total;
    },
};


// account.deposit(1000);
// account.withdraw(1000)

// console.log(account);
// account.getTransactionDetails(1663783742100)

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));