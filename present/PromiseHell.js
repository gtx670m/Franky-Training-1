//Noi nhieu Promise
//((4 + 5) * 6 / 7) - 2 + 3 - 5 + 8 - 4 + 6
const add = (a, b) => {
  return new Promise((resolve, reject) => resolve(a + b));
};
const multiply = (a, b) => {
  return new Promise((resolve, reject) => resolve(a * b));
};
const divide = (a, b) => {
  return new Promise((resolve, reject) => resolve(a / b));
};
const subtract = (a, b) => {
  return new Promise((resolve, reject) => resolve(a - b));
};

add(4, 5).then(resultAdd =>
  multiply(resultAdd, 6).then(resultMul =>
    divide(resultMul, 7).then(resultDiv =>
      subtract(resultDiv, 2).then(resultSub =>
        add(resultSub, 3).then(resultAdd =>
          subtract(resultAdd, 5).then(resultSub =>
            add(resultSub, 8).then(resultAdd =>
              subtract(resultAdd, 4).then(resultSub =>
                add(resultSub, 6).then(resultAdd => console.log(resultAdd))
              )
            )
          )
        )
      )
    )
  )
);

// solution for promise hell
add(4, 5)
  .then(resultAdd => multiply(resultAdd, 6))
  .then(resultMul => divide(resultMul, 7))
  .then(resultDiv => subtract(resultDiv, 2))
  .then(resultSub => add(resultSub, 3))
  .then(resultAdd => subtract(resultAdd, 5))
  .then(resultSub => add(resultSub, 8))
  .then(resultAdd => subtract(resultAdd, 4))
  .then(resultSub => add(resultSub, 6))
  .then(resultAdd => console.log(resultAdd));
