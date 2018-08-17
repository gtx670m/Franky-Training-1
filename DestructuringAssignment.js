const person = { first: 'Foo', last: 'Bar' };
const {first, last} = person;
// <=> const first = person.first
// <=> const last = person.last

let characters = { a: 'alo', b: 1, c: { name: 'Ti', age: 23 } };
let { a: aa, b: bb, c: cc } = characters; // source => target
// <=> let aa = character.a
// <=> let bb = character.b
// <=> let cc = character.c

const foo = () => { 
    return { x: 1, y: 2, z: 3 }; 
};
let {x: x, y: y, z: z} = foo(); // Cách khai báo 1
let {x, y, z} = foo(); // Cách khai báo 2

// Array

let characters = ['alo', 1, { name: 'Ti', age: 23 }];
let [d, e, f] = characters;
// <=> let d = characters[0];
// <=> let e = characters[1];
// <=> let f = characters[2];

let message = 'Hello';
let [a, b] = message;
let [x, y, ...z] = message;
console.log(a, b); // H e
console.log(x, y, z); // H e ['l', 'l', 'o']

const foo = () => { 
    return { x: 1, y: 2, z: 3 }; 
};
let {x = 4, y = 5, z = 6, t = 10} = foo();
console.log(x, y, z, t); // 1 2 3 10

//Nested Array
let numbers = [1, [2, 3, 4], 5];
let [a, [b, c, d], e] = numbers;
console.log(a, b, c, d, e); // 1 2 3 4 5
//Nested Objects
let person = { name: 'Foo', age: 15, information: {address: 'Bar', phone: '0199999999'} };
let {name, age, information: {address, phone}} = person;
console.log(name); // Foo
console.log(age); // 15
console.log(address); // Bar
console.log(phone); // 0199999999

