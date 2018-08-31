this.id = 200;
this.age = 23;
console.log(this);
var obj = {
    id: 100,
    // counter: function counter() {
    counter: () => {
        setTimeout(() => {
            console.log(this.id);
        }, 500);
    },
};

obj.counter();