function solve(arr, n){
    for (let index = 0; index < n; index++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(" "));
}

solve([51, 47, 32, 61, 21], 2);