function triangularSum(nums: number[]): number {
    let curLen: number = nums.length;
    while(curLen > 1){
        for (let i: number = 0; i < curLen-1; i++){
            nums[i] = (nums[i] + nums[i+1]) % 10;
        }
        curLen--;
    }
    return nums[0];
};