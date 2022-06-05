// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    if (n > 0) {
        const maxDashesLength = 2 * (n - 1) + 1;
        for (let i = 0; i < n; i++) {
            const dashesLength = (2 * i) + 1
            const dashesString = Array(dashesLength).fill("#").join("");
            const emptySpace = Array(Math.round((maxDashesLength - dashesLength) / 2)).fill(" ").join("");
            console.log(emptySpace + dashesString);
        }
    }
}

pyramid(5);

module.exports = pyramid;
