function solve(speed, area){
    const motorwaySpeed = 130;
    const interstateSpeed = 90;
    const citySpeed = 50;
    const residentialSpeed = 20;

    if (area === 'motorway'){
        if (speed <= motorwaySpeed)
        {
            console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`);
        }
        else{
            let diff = speed -= motorwaySpeed;
            if (diff > 0 && diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwaySpeed} - speeding`);
            }
            else if (diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwaySpeed} - excessive speeding`);
            }
            else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwaySpeed} - reckless driving`);
            }
        }
    }
    else if (area === 'interstate'){
        if (speed <= interstateSpeed)
        {
            console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`);
        }
        else{
            let diff = speed -= interstateSpeed;
            if (diff > 0 && diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateSpeed} - speeding`);
            }
            else if (diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateSpeed} - excessive speeding`);
            }
            else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateSpeed} - reckless driving`);
            }
        }
    }
    else if (area === 'city'){
        if (speed <= citySpeed)
        {
            console.log(`Driving ${speed} km/h in a ${citySpeed} zone`);
        }
        else{
            let diff = speed -= citySpeed;
            if (diff > 0 && diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed} - speeding`);
            }
            else if (diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed} - excessive speeding`);
            }
            else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed} - reckless driving`);
            }
        }
    }
    else if (area === 'residential'){
        if (speed <= residentialSpeed)
        {
            console.log(`Driving ${speed} km/h in a ${residentialSpeed} zone`);
        }
        else{
            let diff = speed -= residentialSpeed;
            if (diff > 0 && diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialSpeed} - speeding`);
            }
            else if (diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialSpeed} - excessive speeding`);
            }
            else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialSpeed} - reckless driving`);
            }
        }
    }
}

solve(120, 'interstate');