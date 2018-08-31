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
var obj = {
    id: 42,
    counter() {
        self = this;
        setTimeout(function () {
            console.log(self.id); // 42
            console.log(this.id); // undefined
        }/*.bind(this)*/, 1000);
    }
};

var obj = {
    id: 100,
    counter: function counter() {
        setTimeout(() => {
            console.log(this.id);
        }, 500);
    },
};

obj.counter();

this.id = 200;
// const test = () => {
function test() {
    console.log(this);
    this.id = 100;
    return obj = {
        id: 200,
        show: () => {
            return {
                show_child: () => { 
                    console.log(this.id);
                }
            }
        },
        show2() {
            console.log(this.id);
        },
    };
}

test().show().show_child();
// test().show2();

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