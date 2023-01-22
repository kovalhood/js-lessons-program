// Example 3 - User

// Write a class User which creates an object with properties login and email. 
// Declare private properties #login and #email, which can be accessed via getter and setter of login and email.

class User {
    #login;
    #email;

    constructor({ login, email }) {
        this.#login = login;
        this.#email = email;
    }

    set login(login) {
        this.#login = login;
    }

    get login() {
        return this.#login;
    }

    set email(email) {
        this.#email = email;
    }

    get email() {
        return this.#email;
    }
}

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie