const now = () => {
    return 'hello';
}
async function main() {
    let t = /*await*/ now();
    console.log(t)
    // ??? `t` is a `Promise` instance
}

main();