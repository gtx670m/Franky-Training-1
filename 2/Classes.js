class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    sayHello() {
        const { name, age } = this;
        return `Toi ten la ${name}, nam nay ${age} tuoi.`;
    }
}

class VIP extends Person {
    constructor(name, age, money) {
        super(name, age);
        this.money = money;
    }
    showOff() {
        const { money } = this;
        return console.log(`${super.sayHello()} Toi co ${money}$.`);
    }
    static showId() {
        return console.log(123456);
    }
    get VIP_age() {
        return this.age;
    }
    set VIP_age(age) {
        this.age = age;
    }
}

const ti = new VIP('Nguyen Van Ti', 23, 1000000);
ti.showOff();
console.log(ti.getName());
VIP.showId();
console.log(ti.VIP_age);
VIP.VIP_age = 100;
console.log(VIP.VIP_age);