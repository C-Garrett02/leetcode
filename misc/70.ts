function climbStairs(n: number): number {

    let lastStep = 1;
    let lastLastStep = 1;

    for(let i: number = 2; i <= n; i++){
        let thisStep = lastStep + lastLastStep;
        lastLastStep = lastStep;
        lastStep = thisStep;
    }

    return lastStep;
};