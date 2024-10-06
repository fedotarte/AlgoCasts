/**
 Do not return anything, modify nums1 in-place instead.
 @param nums1 {number[]}
 @param m {number}
 @param nums2 {number[]}
 @param n {number}
 @returns {void}
 */
function mergeSortedArrays(nums1, m, nums2, n) {
    let p1 = m-1, p2 = n-1, i = m+n-1;
    while(p2>=0){
        if(p1>=0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1];
            i=i-1;
            p1=p1-1;
        }
        else{
            nums1[i]=nums2[p2];
            i=i-1;
            p2=p2-1;
        }
    }
}

let nums1 = [1,2,3,0,0,0]

let nums2= [2,5,6];
console.log(mergeSortedArrays(nums1,3,nums2,3));
console.log(nums1);


module.exports = mergeSortedArrays;
