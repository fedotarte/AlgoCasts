// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let fullChunksQuantities = Math.floor(array.length/size);  // div Math.ceil
    const restOfChunk  = array.length%size !== 0 ? ((array.length-fullChunksQuantities)%size) : 0; // last
    const chunkedArr = Array.from(Array(fullChunksQuantities+restOfChunk), () => []); //[[]div...+div]
    return chunkedArr.map((chunk) => {
        while (chunk.length < size && array.length > 0) {
            chunk.push(array.shift())
        }
        return chunk
    })
}

module.exports = chunk;
