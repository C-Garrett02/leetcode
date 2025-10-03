function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let bottlesDrank: number = 0;
    while(numExchange <= numBottles){
        bottlesDrank += numExchange;
        numBottles -= (numExchange - 1);
        numExchange++;
    }
    return bottlesDrank + numBottles;
};