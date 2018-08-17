const add = (a, b = 10) => a * b;
console.log(add(2, undefined)); // 2 * 10 = 20
console.log(add(2, 5)); // 2 * 5 = 10

function getAmount() {
    return 100;
}
function getInfo(name, amount = getAmount(), color = name) {
    console.log(name, amount, color);
}
getInfo('Scarlet');
    // "Scarlet"
    // 100
    // "Scarlet"
getInfo('Scarlet', 200);
    // "Scarlet"
    // 200
    // "Scarlet"
getInfo('Scarlet', 200, 'Pink');
    // "Scarlet"
    // 200
// "Pink"