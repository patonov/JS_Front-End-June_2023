function solve(num){
    const number = Number(num);
    let array = [];
    
    for (let index = 0; index < number; index++) {
      array[index] = number;          
    }

    for (let index = 0; index < number; index++) {
        console.log(array.join(' '));         
    }
}

solve(2);