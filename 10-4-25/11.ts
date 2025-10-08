function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length-1;
    let bestProduct: number = Math.min(height[left], height[right])*(right-left);
    let tempLeft: number = left;
    let tempRight: number = right;
    
    while(tempLeft <= tempRight){
        if(height[left] <= height[right]){ //Increase left index while smaller than the right index
            if(height[tempLeft] > height[left]){
                left = tempLeft;
                if(Math.min(height[tempLeft], height[right])*(right-tempLeft) >= bestProduct){
                    bestProduct = Math.min(height[tempLeft], height[right])*(right-tempLeft);
                }
            }
            tempLeft++;
        }
        else{ //Decrease right index while smaller than the left index
            if(height[tempRight] > height[right]){
                right = tempRight;
                if(Math.min(height[left], height[tempRight])*(tempRight-left) >= bestProduct){
                    bestProduct = Math.min(height[left], height[tempRight])*(tempRight-left);
                }
            }
            tempRight--;
        }
    }

    return bestProduct;
};