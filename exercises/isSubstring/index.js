/**
 *
 * @param {string} s sourceString
 * @param {string} t targetString
 * @returns {boolean}
 */

const isSubstring = (s,t) =>{
    const LEFT_SIZE = s.length, RIGHT_SIZE = t.length;
    const recIsSubstring = (leftIndex, rightIndex) => {
        if (leftIndex===LEFT_SIZE){
            return true;
        }
        if (rightIndex===RIGHT_SIZE){
            return false;
        }
        if (s[leftIndex]===t[rightIndex]){
            leftIndex+=1;
        }
        rightIndex+=1
        return recIsSubstring(leftIndex, rightIndex);
    }
    return recIsSubstring(0,0);
}


// console.log(isSubstring("abc","avfbfcg"));


const isSubstringTP = (s,t) => {
    const LEFT_BOUND = s.length, RIGHT_BOUND = t.length;
    let pointerLeft=0, pointerRight = 0;
    while (pointerLeft<LEFT_BOUND && pointerRight<RIGHT_BOUND){
        if (s[pointerLeft]===t[pointerRight]){
            pointerLeft+=1;
        }
        pointerRight+=1
    }
    return pointerLeft===LEFT_BOUND;
}

console.log(isSubstringTP("abc","avfbfg"));


