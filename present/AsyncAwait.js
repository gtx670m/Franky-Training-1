const add = (a, b) => {
    return new Promise((resolve, reject) => resolve(a + b));
};
const multiply = (a, b) => {
    return new Promise((resolve, reject) => resolve(a * b));
};
const divide = (a, b) => {
    return new Promise((resolve, reject) => resolve(a / b));
};
const subtract = (a, b) => {
    return new Promise((resolve, reject) => resolve(a - b));
}
//((4 + 5) * 6 / 7) - 2 + 3 - 5 + 8 - 4 + 6
const calc = async () => {
    let result = await add(4, 5);
    result = await multiply(result, 6);
    result = await divide(result, 7);
    result = await subtract(result, 2);
    result = await add(result, 3);
    result = await subtract(result, 5);
    result = await add(result, 8);
    result = await subtract(result, 4);
    result = await add(result, 6);
    return result;
}

//Handle Error
async function run() {
    try {
        // let result = await calc();
        // console.log(result);
        await calc().then(result => console.log(result));
    } catch (error) {
        console.log(error);
    }
}

run()
.then(successHandler)
.catch(errorHandler);


function wait(ms) {
    return new Promise(r => setTimeout(r, ms))
}

async function main() {
    console.time('main1')
    let w1 = await wait(1000)
    let w2 = await wait(2000)
    console.timeEnd('main1')
}

async function main1() {
    console.time('main')
    let w1 = wait(1000)
    let w2 = wait(2000)
    await w1
    await w2
    console.timeEnd('main')
}

async function main2() {
    console.time('main2')
    const [value1, value2] = await Promise.all([wait(1000), wait(2000)])
    console.timeEnd('main2')
}
main();

main1();
main2();

