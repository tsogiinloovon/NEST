//sorted array given
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//timecomplexity T[N] = O(logn);
BinarySearch = (arr, el) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((right - left) / 2);
    if (arr[mid] == el) {
      return mid;
    } else if (arr[mid] > el) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
//find 2
// console.log("Index:", BinarySearch(arr, 2));


// using Recursion  to find

RecursionBinarySearch = (arr,el,right,left,mid) => {
     mid = Math.floor((right - left) / 2);

    if (arr[mid] == el) {
        return mid;
      } else if (arr[mid] > el) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      RecursionBinarySearch(arr,el,left,right,mid)
};

console.log("Index:", BinarySearch(arr, 3,0,arr.length));