let square = x => x * x;
console.log(square(9));

let user = {
    name: 'Andrew',
    // arrow function and it's downfall
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`);
    },
    // ES6 non-arrow function in object (has access to *this*)
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1, 2, 3);
// prints
// the entire process object
// "Hi. I'm undefined"
user.sayHiAlt(1, 2 ,3);
// prints
// the arguments array
// "Hi. I'm Andrew"
