function maxFrequencyElements(nums: number[]): number {
    let frequency: number[] = [];
    let maxFreqAmount: number = 0;
    let highestFreq: number = 0;

    for (const num of nums){
        //Check to see if null, if not then add 1. Otherwise set to 1.
        if(frequency[num-1] == null){
            frequency[num-1] = 1;
        }
        else{
            frequency[num-1] = frequency[num-1] + 1;
        }

        //Check to see if new frequency is higher than recorded highest. If so, make new freq the highest freq.
        //Also, count the number of times we reach the highestFreq.
        if (frequency[num-1] > highestFreq){
            highestFreq = frequency[num-1];
            maxFreqAmount = 1;
        }
        else if (frequency[num-1] == highestFreq){
            maxFreqAmount += 1;
        }
    }

    return maxFreqAmount*highestFreq;
};