function solve(a, b, c){
    let arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);

    arr.reverse();

    console.log(arr.join(" "));
}

solve('A', 'B', 'C');