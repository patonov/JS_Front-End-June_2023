function solve(input){
    let result = [];
    input.forEach((command) => {
        let [direction, number] = command.split(', ');
        if (direction === 'IN'){
            if (!result.find(n => n === number)){
            result.push(number);
            }
        } 

        if (direction === 'OUT'){
            if (result.find(n => n === number)){
            let index = result.indexOf(number);
            result.splice(index, 1);
            }
        }
    });

    if (result.length === 0){
        console.log('Parking Lot is Empty');
    } else {
        result.sort()
        .forEach(n => console.log(n));
    }


}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);