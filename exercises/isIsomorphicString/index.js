/**
 *
 * @param s {string}
 * @param t {string}
 * @returns {boolean}
 */
const isIsomorphicString = (s,t) =>{
    const sMap = new Map(), tSet = new Set();
    let isIsomorphic = true;
    [...s].forEach((sChar, sIndex)=>{
        if(!sMap.has(sChar)&&!tSet.has(t[sIndex])){
            sMap.set(sChar, t[sIndex]);
            tSet.add(t[sIndex]);
        }
        else if (sMap.get(sChar)!==t[sIndex]){
            isIsomorphic = false;
        }
    })
    return isIsomorphic;
}

console.log(isIsomorphicString("ebbf", "assg"))
