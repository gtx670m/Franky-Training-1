this.temp = 'Global';
const obj = {
    temp: 'Local',
    arrow: () => console.log(`arrow function: ${this.temp}`),
    // this ở đây là this của function test
    regular: function () {
        // this.temp = 'Private';
        console.log(`regular function: ${this.temp}`);
        // this ở đây là object trả về
    }
}
obj.arrow(); // Global
// => this ở arrow function tham chiếu đến cha gần nhất của nó
//theo medium: arrow function sử dụng this từ đoạn mã chứa nó
obj.regular(); // Local