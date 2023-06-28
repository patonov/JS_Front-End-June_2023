function solve(nums){
    const numsArrSorted = nums.sort((a, b) => a - b);
    let customArr = [];
    const length = numsArrSorted.length;

    for (let index = 0; index < length; index++) {
        if (index % 2 === 0){
            customArr.push(numsArrSorted.shift());
        }
        else{
            customArr.push(numsArrSorted.pop());
        }
        
    }

    return customArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);