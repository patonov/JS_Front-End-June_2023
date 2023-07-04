function solve(nums){
    for (const num of nums) {
        let numString = num.toString();
        let firstSub = numString.substring(0, numString.length / 2);
        let secondSub;
        if (numString.length % 2 === 0){
            secondSub = numString.substring(numString.length / 2);
        }
        else{
            secondSub = numString.substring(numString.length / 2 + 1);
        }
        
        secondSub = [...secondSub].reverse().join("");
        let bool = true;

        for(let i = 0; i < firstSub.length; i++){
            if(bool == true && firstSub[i] === secondSub[i]){
                bool = true;
            }
            else{
                bool = false;
            }
        }

        console.log(bool);
    }   
}

solve([32,2,232,1010]);