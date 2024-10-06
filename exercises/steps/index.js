// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i=1; i<=n;  i++){
        const initialHash = "#".repeat(i);
        const concatenated = initialHash
            .concat(
                i < n
                    ? " ".repeat(n-i)
                    : ""
            )
        console.log(concatenated)
    }
}

steps(5)

module.exports = steps;
