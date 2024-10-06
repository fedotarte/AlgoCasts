// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 *
 * @param {string} stringA
 * @param {string} stringB
 * @returns boolean
 */
function anagrams(stringA, stringB) {
    /**
     *
     * @param { string } str getting
     * @return {string[]} sorted char array
     */
    const strToArr = (str) => str.toLowerCase().split("").sort().join("");
    const [sortedA, sortedB] = [strToArr(stringA), strToArr(stringB)];
    return sortedA === sortedB
}

console.log(anagrams('hello', 'llohe'));

module.exports = anagrams;
