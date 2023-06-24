function solve(age){
    if(age < 0){
        console.log('out of bounds');
        return;
    }

    if(age >= 66){
        console.log('elder');
    }
    else if(age >= 20){
        console.log('adult');
    }
    else if(age >= 14){
        console.log('teenager');
    }
    else if(age >= 3){
        console.log('child');
    }
    else if(age >= 0){
        console.log('baby');
    }
}

solve(-1);