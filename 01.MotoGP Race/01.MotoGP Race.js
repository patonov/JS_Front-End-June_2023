function solve(input){
    let count = Number(input.shift());
    let riders = input.slice(0, count);
    let commands = input.slice(count);

    let competition = riders.reduce((acc, curr) => {

        const [rider, fuelCapacity, position] = curr.split("|");
        
        acc[rider] = {rider, fuelCapacity: Number(fuelCapacity), position: Number(position) };

        return acc;
    },{});

    commands.forEach(command => {
        const [commandName, ...rest] = command.split(" - ");
        switch(commandName){
            case "StopForFuel": StopForFuelFunc(...rest); break;
            case "Overtaking": OvertakingFunc(...rest); break;
            case "EngineFail": EngineFailFunc(...rest); break;
        }
    });

    function StopForFuelFunc(rider, minFuel, newPosition){
        let fuelCapacity = competition[rider].fuelCapacity;
        if(fuelCapacity < minFuel){
            competition[rider].position = newPosition;
            console.log(`${rider} stopped to refuel but lost his position, now he is ${newPosition}.`);
        } else {
            console.log(`${rider} does not need to stop for fuel!`);
        }
    }

    function OvertakingFunc(rider1, rider2){
        let interimPosition1 = competition[rider1].position;
        let interimPosition2 = competition[rider2].position;
        
        if(interimPosition1 < interimPosition2){
            competition[rider1].position = interimPosition2;
            competition[rider2].position = interimPosition1;

            console.log(`${rider1} overtook ${rider2}!`);
        }
    }

    function EngineFailFunc(rider, laps){        
        delete competition[rider];
        console.log(`${rider} is out of the race because of a technical issue, ${laps} laps before the finish.`);
    }

    for (const r in competition) {
        console.log(competition[r].rider);
        console.log(" Final position: " + competition[r].position);
    };


}

solve(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);