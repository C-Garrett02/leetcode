function successfulPairs1(spells: number[], potions: number[], success: number): number[] {

    //Bad approach. Too much needless iteration.

    let pairs: number[] = [];
    potions.sort((a,b) => a-b);
    let greaterThan: number[] = [];
    let lastNum: number = potions[potions.length-1];
    greaterThan[lastNum] = 1;

    for (let i: number = potions.length-2; i >= 0; i--){
        if(lastNum === potions[i]){
            greaterThan[lastNum] += 1;
        }
        else{
            for(let j: number = lastNum-1; j >= potions[i]; j--){
                greaterThan[j] = greaterThan[lastNum];
            }
            lastNum = potions[i];
            greaterThan[lastNum] += 1;
        }
    }

    if(greaterThan[0] === undefined){
        for(let i: number = lastNum-1; i > 0; i--){
            greaterThan[i] = greaterThan[lastNum];
        }
    }

    for (let i: number = 0; i < spells.length; i++){
        let minPotion = Math.ceil(success/spells[i]);
        pairs.push(greaterThan[minPotion] !== undefined ? greaterThan[minPotion] : 0);
    }

    return pairs;
};