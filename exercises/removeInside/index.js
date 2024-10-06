/**
 * input: [1,2,3,4,5], 4
 * output: [1,2,3,5]
 * @param nums {Array<number>}
 * @param val {number}
 * @return {Array<number>}
 */
const removeInside = (nums, val) => {
    for (let i=0; i<nums.length; i++){
        if (nums[i] === val){
            for (let j=i; j<=nums.length-1; j++) {
                if (nums[j + 1] && nums[j + 1] !== nums[j]) {
                    let temp = nums[j + 1];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                    if (j + 1 === nums.length-1) {
                        nums.pop();
                    }
                } else if(nums[j + 1]) {
                    nums.splice(i, 2);
                }
                else nums.pop();
            }
        }
    }
    return  nums;
}

console.log(removeInside([3,2,2,3], 3));
