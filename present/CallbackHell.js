// callback hell
//((4 + 5) * 6 / 7) - 2 + 3 - 5 + 8 - 4 + 6
const add = (a, b, cb) => {
  let result = a + b;
  cb(result);
};
const subtract = (a, b, cb) => {
  let result = a - b;
  cb(result);
};
const divide = (a, b, cb) => {
  let result = a / b;
  cb(result);
};
const multiply = (a, b, cb) => {
  let result = a * b;
  cb(result);
};

add(4, 5, resultAdd => {
  multiply(resultAdd, 6, resultMul => {
    divide(resultMul, 7, resultDiv => {
      subtract(resultDiv, 2, resulSub => {
        add(resulSub, 3, resultAdd => {
          subtract(resultAdd, 5, resultSub => {
            add(resultSub, 8, resultAdd => {
              subtract(resultAdd, 4, resultSub => {
                add(resultSub, 6, resultAdd => {
                  console.log(resultAdd);
                });
              });
            });
          });
        });
      });
    });
  });
});

// solution for callback hell
//((4 + 5) * 6 / 7) - 2 + 3 - 5 + 8 - 4 + 6

const cong5 = () => {
  add(4, 5, kq => nhan6(kq));
};
const nhan6 = result => {
  multiply(result, 6, kq => chia7(kq));
};
const chia7 = result => {
  divide(result, 7, kq => tru2(kq));
};
const tru2 = result => {
  subtract(result, 2, kq => cong3(kq));
};
const cong3 = result => {
  add(result, 3, kq => tru5(kq));
};
const tru5 = result => {
  subtract(result, 5, kq => cong8(kq));
};
const cong8 = result => {
  add(result, 8, kq => tru4(kq));
};
const tru4 = result => {
  subtract(result, 4, kq => cong6(kq));
};
const cong6 = result => {
  add(result, 6, kq => console.log(kq));
};
cong5();
