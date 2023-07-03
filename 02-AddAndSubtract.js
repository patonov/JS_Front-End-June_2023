function solve(a, b, c){

    let sum = (a, b) => a + b;

    let subtract = (a, b) => a - b;

    console.log(subtract(sum(a, b), c));
}

solve(23, 6, 10);