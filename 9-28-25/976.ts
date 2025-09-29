function largestPerimeter(nums: number[]): number {
    let sortedNums: number[] = nums.sort((a, b) => b - a);
    for(let i: number = 0; i < nums.length; i++){
        for(let j: number = i+1; j < nums.length; j++){
            if(nums[j] < nums[i]/2){
                break;
            }
            for(let k: number = j+1; k < nums.length; k++){ //This loop is kind of useless upon further inspection, but keeping it as-is for now.
                if(nums[j] + nums[k] > nums[i]){
                    return nums[i] + nums[j] + nums[k];
                }
                else{
                    break;
                }
            }
        }
    }
    return 0;
};

function binarySearch(nums: number[], target: number, left: number): number {
    while(true){
        
    }
};