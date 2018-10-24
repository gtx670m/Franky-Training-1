function main(a, b, cb) {
  if (isNaN(a) || isNaN(b)) return cb(new Error("Type Error!"));
  setTimeout(() => {
    const result = a + b;
    cb(null, result);
  }, 1000);
}

main(5, 5, (error, result) => {
  if (error) return console.log(error.message);
  console.log(result);
});

function test(a, b) {
  setTimeout(() => {
    const result = a + b;
    return result;
  }, 1000);
}

console.log(test(4, 5));
