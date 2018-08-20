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
test().regular(); // Local
// => this ở function thường tham chiếu đến object chứa nó