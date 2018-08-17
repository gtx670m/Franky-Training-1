//const
const A = 5;
A = 10; // Lỗi Uncaught TypeError: Assignment to constant variable



//let



//var
console.log(a);
var a = 123;
console.log(a);
// <=>
var a;
console.log(a);
a = 123;
console.log(a);



//let vs var
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined