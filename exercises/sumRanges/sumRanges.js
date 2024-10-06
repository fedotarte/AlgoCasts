const exampleArr = [1,2,3,5,6,7,9,10,11,12,14,15,16,17,19]

// [1|,2,3,5,6,7]
function summarizeRanges(nums) {
    if (!nums.length) return [];

    const result = [];
    let start = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]+1){
            if(start === nums[i-1]){
                result.push(`${start}`);
            } else {
                result.push(`${start}-${nums[i-1]}`);
            }
            start = nums[i];
        }
    }

    return result;
}

console.log(summarizeRanges(exampleArr));