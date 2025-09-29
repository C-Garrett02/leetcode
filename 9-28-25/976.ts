function largestPerimeter(nums: number[]): number {
    let sortedNums: number[] = nums.sort((a, b) => b - a);
    for(let i: number = 0; i < nums.length-2; i++){
        for(let j: number = i+1; j < nums.length; j++){
            if(nums[j] < nums[i]/2){
                break;
            }
            else if(nums[j] + nums[j+1] > nums[i]){
                return nums[i] + nums[j] + nums[j+1];
            }
            else{
                break;
            }
        }
    }
    return 0;
};

function binarySearch(nums: number[], target: number, left: number): number {
    while(true){
        
    }
};