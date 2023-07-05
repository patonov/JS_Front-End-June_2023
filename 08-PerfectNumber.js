function solve(num){
    let number = Number(num);
    let sum = 0;
    let dividor = 0;

    while(true){
        dividor++;
        if(number % dividor === 0){
            sum += dividor;
        }
        if (sum >= number){
            break;
        }
    }
    if(sum === number){
        console.log('We have a perfect number!');
    }
    else{
        console.log("It's not so perfect.");
    }
}

solve(1236498);