/**
 *
 * @param {Array<number>} nums
 * @param {number} target
 */
function binarySearch(nums, target){
    let left = 0, right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]<target){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return -1;
}

// console.log(binarySearch([1,3,5,7,9,11,13,15,17,19], 15))

const newBinarySearch = (arr, elem) => {
    let [left, right] = [0, arr.length-1];
    while(left<right){
        let mid = Math.floor((left+right)/2);
        if (elem < arr[mid]){
            right=mid;
        } else if (elem > arr[mid]){
            left=mid;
        }
        else {
            return mid;
        }
    }
    return -1;
}
console.log(newBinarySearch([1,3,5,7,9,11,13,15,17,19], 15))
