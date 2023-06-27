function solve(num, ...commands){
    
    let sum = Number(num);

    for (let index = 0; index < commands.length; index++) {
        let command = commands[index];

        switch(command){
            case "chop": sum = sum / 2; break;
            case "dice": sum = Math.sqrt(sum); break;
            case "spice": sum = sum + 1; break;
            case "bake": sum = sum * 3; break;
            case "fillet": sum = sum - sum * 0.2; break;
        }
        console.log(sum);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');