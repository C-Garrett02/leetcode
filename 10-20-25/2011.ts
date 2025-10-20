function finalValueAfterOperations(operations: string[]): number {
    //very easy problem today. Unsure if there's a way to make this quicker or take up less space? 
    let x: number = 0;
    for(let operation of operations){
        if(operation[1] == '+'){
            x++;
        }
        else{
            x--;
        }
    }
    return x;
};