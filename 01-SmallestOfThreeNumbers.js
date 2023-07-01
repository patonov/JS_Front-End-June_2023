function smallestNumber(num1, num2, num3){
    let array = [];
    array.push(num1);
    array.push(num2);
    array.push(num3);
    console.log((array.sort((a, b) => a - b))[0]);

}

smallestNumber(1, 2, 3);