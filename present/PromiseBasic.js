//Basic
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(a) || isNaN(b)) return reject(new Error("Type Error!"));
      resolve(a + b);
    }, 3000);
  });
};

const subtract = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(a) || isNaN(b)) return reject(new Error("Type Error!"));
      resolve(a - b);
    }, 2000);
  });
};

add(4, "hello")
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
subtract(10, 5)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
