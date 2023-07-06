function solve(percent) {
    const times = percent / 10;
    if(percent % 10 != 0 || percent > 100){
        return;
    }

    let output = '';
    output = `${times}0% [..........]`;

    for (let index = 0; index < times; index++) {
        output = output.replace('.', '%');
    }
    
    if(times < 10){
        console.log(output);
        console.log('Still loading...');
    }
    else{
        console.log('100% Complete!');
        console.log(output.substring(4));
    }
}

solve(100);