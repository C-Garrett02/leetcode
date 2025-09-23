function compareVersion(version1: string, version2: string): number {
    let ver1Array: string[] = version1.split(".");
    let ver2Array: string[] = version2.split(".");
    let ver1Pos: number = 0;
    let ver2Pos: number = 0;

    //Stage 1 (matching numbers in the same array slots)
    while(true){
        if(+ver1Array[ver1Pos] > +ver2Array[ver2Pos]){
            return 1;
        }
        else if(+ver1Array[ver1Pos] < +ver2Array[ver2Pos]){
            return -1;
        }
        else if(+ver1Array[ver1Pos] === +ver2Array[ver2Pos]){
            ver1Pos += 1;
            ver2Pos += 1;
        }

        if(ver1Array[ver1Pos] === undefined && ver2Array[ver2Pos] == undefined){
            return 0;
        }
        else if(ver1Array[ver1Pos] === undefined){
            ver1Pos -= 1;
            break;
        }
        else if(ver2Array[ver2Pos] === undefined){
            ver2Pos -= 1;
            break;
        }
    }

    //Stage 2 (uneven length comparison)
    while(ver1Pos > ver2Pos){
        if(ver1Array[ver1Pos] === undefined){
            break;
        }
        else if(+ver1Array[ver1Pos] > 0){
            return 1;
        }
        ver1Pos++;
    }
    while(ver1Pos < ver2Pos){
        if(ver2Array[ver2Pos] === undefined){
            break;
        }
        else if(+ver2Array[ver2Pos] > 0){
            return -1;
        }
        ver2Pos++;
    }
    
    return 0;
};