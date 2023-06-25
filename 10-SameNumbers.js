function solve(num){
    let aaa = num.toString();
    let isTrue = true;
    let sum = 0;

    for(let i = 0; i < aaa.length; i++){
        if(i > 0 && isTrue === true){
            if(aaa[i] === aaa[i - 1])
            {
                isTrue = true;
            }
            else{
                isTrue = false;
            }
        }
        sum += Number(aaa[i]);
    }
    console.log(isTrue);
    console.log(sum);
}

solve(1234);