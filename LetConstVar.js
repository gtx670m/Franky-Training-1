//const
const A = 5;
A = 10; // Lỗi Uncaught TypeError: Assignment to constant variable



//let
function foo() {
    let x = 10;
    if (true) {
        let x = 20; // x này là x khác rồi đấy
        console.log(x); // in ra 20
    }
    console.log(x); // in ra 10
}




//var
function foo() {
    var x = 10;
    if (true) {
        var x = 20; // x ở đây cũng là x ở trên
        console.log(x); // in ra 20
    }
    console.log(x); // vẫn là 20
}



//let vs var
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined