function solve(arr, n){
    let output = [];
    for (let index = 0; index < arr.length; index+=n) {
        console.log(arr[index]);
    }    
}

solve([51, 47, 32, 61, 21], 2);