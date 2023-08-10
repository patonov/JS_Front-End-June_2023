function solve(input){
    let horses = input.shift().split("|");
    
    for (const command of input) {
        let arr = command.split(' ');
        if (arr[0] === "Retake"){
            let overtaking = arr[1];
            let overtaken = arr[2];
            let firstIndex = horses.indexOf(overtaking);
            let secondIndex = horses.indexOf(overtaken);

            if (firstIndex < secondIndex){
                horses[secondIndex] = overtaking;
                horses[firstIndex] = overtaken;
                console.log(`${overtaking} retakes ${overtaken}.`);
            }
        } else if (arr[0] === "Trouble"){
            let dropped = arr[1];
            let index = horses.indexOf(dropped);

            if (index !== 0){
                horses.splice(index - 1, 0, dropped);
                console.log(`Trouble for ${dropped} - drops one position.`);
                horses.splice(index + 1, 1);
            }

        } else if (arr[0] === "Rage"){
            let raged = arr[1];
            let index = horses.indexOf(raged);

            if ((horses.length - index + 1) > 2){
                horses.splice(index + 3, 0, raged);                
                horses.splice(index, 1);
            } else {
                horses.push(raged);
                horses.splice(index, 1);
            }
            console.log(`${raged} rages 2 positions ahead.`);
        } else if (arr[0] === "Miracle"){
            let stupid = horses.shift();
            horses.push(stupid);
            console.log(`What a miracle - ${stupid} becomes first.`);

        } else if (arr[0] === "Finish") {
            console.log(horses.join("->"));
            console.log(`The winner is: ${horses.pop()}`);
            break;
        }        
    }
}

solve(['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly']);


