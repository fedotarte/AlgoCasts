// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => str.split('').every((char, index) => char === str[str.length - 1 - index])


// function palindrome(str) {
//   const strLen =  str.length;
//   for(let i=0; i<=((strLen-1)/2); i++){
//       if(str[i]!==str[strLen-1-i]){
//           return false;
//       }
//       return true;
//   }
// }

module.exports = palindrome;
