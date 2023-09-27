'use strict';

let user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';

delete user.name;

console.log(user);

// ---------

const userTest = {
    name: "John"
};

// Це працюватиме?

userTest.name = "Pete";

console.log(userTest);

// Это работает потому что обьект это ссылочный тип
// --------

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);
