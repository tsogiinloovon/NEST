//1480. Running Sum of 1d Array

var runningSum = function(nums) {
    let retarr = [];
    for(let i = 0;i<nums.length;i++){
        let sum = 0;
        for(let j = i;j>=0;j--){
            sum+=nums[j];
        }   
        retarr.push(sum);
    }
    return retarr;
};


console.log(runningSum([1,2,3,4]))