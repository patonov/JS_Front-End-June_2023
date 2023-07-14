function solve(input){
    let copyArr = [];
    let interimObject = {};

    for (const iterator of input) {
        let parseObject = JSON.parse(iterator);
        if (typeof(parseObject) === 'object'){
            for (const key in parseObject) {
                interimObject[key] = parseObject[key];
            }
        }
    }

    for (const key in interimObject) {
        copyArr.push(`Term: ${key} => Definition: ${interimObject[key]}`);
    }

    copyArr.sort()
    .forEach(t => console.log(t));

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variationswhich may then be amplified, transmitted, or recorded."}']);