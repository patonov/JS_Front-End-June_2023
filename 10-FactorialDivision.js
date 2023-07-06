function solve(x, y){

    function factorialMultilying(num){
        let sum = 1;
        for(let i = 1; i <= num; i++){
            sum *= i;
        }
        return sum;
    }

    let xSum = factorialMultilying(x);
    let ySum = factorialMultilying(y);

    let result = xSum / ySum;

    console.log(result.toFixed(2));
}

solve(5, 2);