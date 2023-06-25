function solve(input){
    let sum = 0;
    const aaa = input.toString();

    for(let i = 0; i < aaa.length; i++){
        sum += Number(aaa[i]);
    }

    console.log(sum);
}

solve(245678);