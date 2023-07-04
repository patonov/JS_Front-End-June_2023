function solve(input){
    const num = input.toString();
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < num.length; i++) {
        if(Number(num[i]) % 2 === 0){
            evenSum += Number(num[i]);
        }
        else{
            oddSum += Number(num[i]);
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(solve(1000435));