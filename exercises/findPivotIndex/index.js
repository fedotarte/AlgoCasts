/**
 *
 * @param nums {Array<number>}
 * @returns {boolean}
 */
const findPivotIndex = (nums) =>{
    const sum = nums.reduce((sum, num)=>sum+num);
    let leftSum = 0, pivotIndex = -1;
    nums.forEach((num, index)=>{
        const rightSum = sum - num - leftSum;
        if (rightSum===leftSum){
            pivotIndex=index;
        }
        leftSum+=num;
    })
    return pivotIndex;
}

console.log(findPivotIndex([2,5,6,3,4]));
