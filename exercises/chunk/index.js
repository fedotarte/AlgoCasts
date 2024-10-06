// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
function chunk(array, size) { // 8 in 3
    const chunksSize = Math.ceil(array.length / size);
    const resultArray = [];
    let chunkElem = [];
    array.forEach((element, index) => {
        const chunkIndex = index % size;
        chunkElem[chunkIndex]  = element;
        if(chunkIndex===size-1 || index===array.length-1){
            resultArray.push(chunkElem);
            chunkElem = [];
        }
    })


    return resultArray;
}


console.log(chunk([1, 2, 3, 4, 5,6,7,8], 3))
console.log(chunk([1, 2, 3, 4, 5], 2));

// module.exports = chunk;
