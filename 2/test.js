let temp = 40;
this.temp = 20;
const obj = {
    temp: 30,
    test: function () {
        this.temp = 10;
        console.log(abc=this);
    },
    test2: () => { console.log(abc = this); }
}

obj.test();
// obj.test2();