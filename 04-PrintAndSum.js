function solve(start, end){
    let sum = 0;
    let array = [];

    for(let i = start; i <= end; i++){
        array.push(i);
        sum += i;
    }

    console.log(array.join(" "));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);