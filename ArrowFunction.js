//Basic Syntax with Multiple Parameters:
const ex = (a, b, c) => ({ a, b, c });

//Basic Syntax with One Parameter:
const ex = a => a;

//No Parameters:
const ex = () => 1;

//Object Literal Syntax:
const ex = (a, b, c) => ({ name: a, age: b, c });

//Use Cases for Arrow Functions:
const sqr = x => x * x;
const ex = arr.map(x => x * x);
const ex = arr.filter(x => x > 3);
arr.forEach(x => console.log(x));
