//Basic
const ex = (a) => {
    return new Promise((resolve, reject) => {
        if (a) resolve(a);
        else reject('Error!');
    });
};
ex(true)
.then(data => console.log(data))
.catch(err => console.log(err));



//Noi nhieu Promise
//(5 + 6) * 7 / 8
const add = (a, b) => {
    return new Promise((resolve, reject) => resolve(a + b));
};
const multiplication = (a, b) => {
    return new Promise((resolve, reject) => resolve(a * b));
};
const division = (a, b) => {
    return new Promise((resolve, reject) => resolve(a / b));
};
add(5, 6).then(resultAdd => multiplication(resultAdd, 7)
    .then(resultMul => division(resultMul, 8)
        .then(resultDiv => console.log(resultDiv)))
);