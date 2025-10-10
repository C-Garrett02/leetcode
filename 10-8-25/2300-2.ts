function successfulPairs2(spells: number[], potions: number[], success: number): number[] {

    //Better solution

    let pairs: number[] = [];
    potions.sort((a,b) => a-b);
    for (let i: number = 0; i < spells.length; i++){
        let minPotion = Math.ceil(success/spells[i]);

        if(potions[potions.length-1] < minPotion){
            pairs.push(0);
            continue;
        }
        else if(potions[0] >= minPotion){
            pairs.push(potions.length);
            continue;
        }
    
        let lo: number = 0;
        let hi: number = potions.length-1;
        let index = potions.length-1;

        while (lo <= hi) {
            let mid: number = lo + Math.floor((hi - lo) / 2);

            if(potions[mid] >= minPotion && potions[mid] < potions[index]) {
                index = mid;
            } 
            else if(potions[mid] >= minPotion && potions[mid] === potions[index]) {
                index = Math.min(index, mid);
            }

            if(potions[mid] === minPotion && potions[mid-1] != minPotion) {
                index = mid;
                break;
            } 
            else if(potions[mid] < minPotion) {
                lo = mid + 1;
            } 
            else{
                hi = mid - 1;
            }
        }
        pairs.push(potions.length - index);
    }

    return pairs;
};