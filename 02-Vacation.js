function solve(number, type, day){
    let amount = 0;
    
    if(type === "Students"){
        if(day=== "Friday"){
            amount = number * 8.45;
        }
        else if(day === "Saturday"){
            amount = number * 9.80;
        }
        else if(day === "Sunday"){
            amount = number * 10.46;
        }

        if (number >= 30){
            amount *= 0.85;
        }
    }
    else if (type === "Business"){
        if (number >= 100)
        {
            number -= 10;
        }        
        
        if(day=== "Friday"){
            amount = number * 10.90;
        }
        else if(day === "Saturday"){
            amount = number * 15.60;
        }
        else if(day === "Sunday"){
            amount = number * 16;
        }
    }
    else if(type === "Regular"){
        if(day=== "Friday"){
            amount = number * 15;
        }
        else if(day === "Saturday"){
            amount = number * 20;
        }
        else if(day === "Sunday"){
            amount = number * 22.50;
        }

        if(number >= 10 && number <= 20){
            amount *= 0.95;
        }
    }

    console.log(`Total price: ${amount.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");