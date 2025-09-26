function triangleNumber(nums: number[]): number {
    //First thoughts are likely "naive". Just iterate over the array ... a lot. triple loop, i/j/k.
    //Cut out some unnecessary iterations by sorting, then by breaking whenever we reach a number that is too high.

    //Currently there is more room for optimization. Using binary search to find where that final inequality is no longer satisfied. May add this in later.
    //This does currently pass though. Albeit slowly.

    let sortedNums: number[] = nums.sort((a, b) => a - b);

    let total: number = 0;

    for(let i: number = 0; i < nums.length; i++){
        if(sortedNums[i] == 0){
            continue;
        }
        for(let j: number = i+1; j < nums.length; j++){
            for(let k: number = j+1; k < nums.length; k++){
                if(sortedNums[i] + sortedNums[j] > sortedNums[k]){
                    total += 1;
                }
                else{
                    break;
                }
            }  
        }
    }

    return total
};