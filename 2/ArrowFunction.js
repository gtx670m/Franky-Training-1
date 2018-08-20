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

//Arrow function không định nghĩa giá trị arguments
const test = (a, b, c) => {
    console.log(arguments); //không lấy được các tham số truyền vào
    return { a, b, c };

}
test(4, 5, 6);



//Không phù hợp làm method cho object vì không định nghĩa
//giá trị "this" của riêng nó
const test = function () {
    this.temp = 'Global';
    return {
        temp: 'Local',
        arrow: () => console.log(`arrow function: ${this.temp}`),
        // this ở đây là this của function test
        regular: function () {
            // this.temp = 'Private';
            console.log(`regular function: ${this.temp}`);
            // this ở đây là object trả về
        }
    }
};

test().arrow(); // Global
// => this ở arrow function tham chiếu đến cha gần nhất của nó
//theo medium: arrow function sử dụng this từ đoạn mã chứa nó
test().regular(); // Local
// => this ở function thường tham chiếu đến object chứa nó
//theo medium function thường xác định this tùy theo ngữ cảnh mà nó được gọi


//Không có thuộc tính prototype
let Foo = () => { };
console.log(Foo.prototype); // undefined



//Không được hoisted
let myFunc1 = () => { }
myFunc1(); // OK

myFunc2(); // => ReferenceError: myFunc2 is not defined
let myFunc2 = () => { }


//Không dùng cho hàm callback có ngữ cảnh động
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});