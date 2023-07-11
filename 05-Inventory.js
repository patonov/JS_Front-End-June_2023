function solve(input){
    let heroes = [];
    input.forEach((command) => {
        let [name, level, things] = command.split(' / ');
        heroes.push({name, level, things});
    });

    heroes.sort((a, b) => (a.level - b.level))
    .forEach((h) => console.log(
        `Hero: ${h.name}` + '\n' +
        `level => ${h.level}`+ '\n' +
        `items => ${h.things}`
    ));

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
