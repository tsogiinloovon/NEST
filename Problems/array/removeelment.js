//1909. Remove One Element to Make the Array Strictly Increasing

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (nums[i - 1] >= nums[i + 1]) {
        nums.splice(i-1,1);
      } else {
        nums.splice(i,1) ;
      }
      break;
    }
  }
  for(let i = 0 ;i<nums.length;i++){
      if(nums[i]<=nums[i-1]){
          return false
      }
  }

   return true;
};
console.log(canBeIncreasing([1, 2, 10, 5, 7]));
