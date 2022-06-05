// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strArr = str.split("");
    const charMap = new Map();
    strArr.forEach(char => {
        if (charMap.has(char)){
            const inc = charMap.get(char)+1;
            charMap.set(char, inc);
        }
        else charMap.set(char,1);
    })
    const maxPair = ([...charMap.entries()])
        .reduce(([prevK,PrevV], [k,v]) =>
            (v > PrevV)
                ? [k,v]
                : [prevK,PrevV]
        );
    return maxPair[0];
}

module.exports = maxChar;
