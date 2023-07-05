function solve(password){
    let isNotValidTimes = 0;
    if(password.length < 6 || password.length > 10){
        console.log('Password must be between 6 and 10 characters');
        isNotValidTimes++;
    }

    if(/^[A-Za-z0-9]*$/.test(password) === false){
        console.log('Password must consist only of letters and digits');
        isNotValidTimes++;
    }

    if(/[0-9]{2}/.test(password) === false){
        console.log('Password must have at least 2 digits');
        isNotValidTimes++;
    }

    if(isNotValidTimes === 0){
        console.log('Password is valid');
    }

}

solve('MyPass123');