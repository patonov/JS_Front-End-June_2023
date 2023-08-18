function solve(input){
    let count = Number(input.shift());
    let astrunaurs = input.slice(0, count);
    let commands = input.slice(count);

    let exploration = astrunaurs.reduce((acc, curr) => {

        const [name, oxygen, energy] = curr.split(" ");
        
        acc[name] = {name, oxygen: Number(oxygen), energy: Number(energy) };

        return acc;
    },{});
    
    commands.forEach(command => {
        const [commandName, ...rest] = command.split(" - ");
        switch(commandName){
            case "Explore": exploreFunc(...rest); break;
            case "Refuel": refuelFunc(...rest); break;
            case "Breathe": breatheFunc(...rest); break;
        }
    });

    function exploreFunc(name, energyNeeded){
        if (exploration[name].energy >= energyNeeded){
            exploration[name].energy -= energyNeeded;
            console.log(`${exploration[name].name} has successfully explored a new area and now has ${exploration[name].energy} energy!`);
        } else {
            console.log(`${exploration[name].name} does not have enough energy to explore!`);
        }
    }

    function refuelFunc(name, energyAmount){
        energyAmount = Number(energyAmount);
        let energy = exploration[name].energy;
        if ((energy += energyAmount) > 200){
            let taken = 200 - exploration[name].energy;
            exploration[name].energy = 200;
            console.log(`${exploration[name].name} refueled their energy by ${taken}!`);    
        } else {
            exploration[name].energy += energyAmount;
            console.log(`${exploration[name].name} refueled their energy by ${energyAmount}!`);
        }
    }

    function breatheFunc(name, oxyAmount){
        oxyAmount = Number(oxyAmount);
        let oxy = exploration[name].oxygen;
        if ((oxy += oxyAmount) > 100){
            let taken = 100 - exploration[name].oxygen;
            exploration[name].oxygen = 100;
            console.log(`${exploration[name].name} took a breath and recovered ${taken} oxygen!`);    
        } else {
            exploration[name].oxygen += oxyAmount;
            console.log(`${exploration[name].name} took a breath and recovered ${oxyAmount} oxygen!`);
        }
    }

    for (const a in exploration) {
        console.log(`Astronaut: ${exploration[a].name}, Oxygen: ${exploration[a].oxygen}, Energy: ${exploration[a].energy}`);
    };


}

solve(['3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End']
);