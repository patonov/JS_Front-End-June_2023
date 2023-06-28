function solve(names){
    let namesArr = [];
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        let newName = name.charAt(0).toUpperCase() + name.slice(1);
        namesArr.push(newName);
    }

    namesArr.sort();

    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        let oldName = name.charAt(0).toUpperCase() + name.slice(1);
        if (namesArr.includes(oldName)){
            let place = namesArr.indexOf(oldName);
            namesArr[place] = name;
        }
    }

    
    for (let index = 0; index < namesArr.length; index++) {
        console.log(`${index + 1}.${namesArr[index]}`);
    }
}

solve(["John", "bob", "Christina", "ema"]);

