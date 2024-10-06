/**
 * @param str {string}
 * @return {string}
 */
const LRU = (str) => {
    let result = '';
    let start = '';
    let repeatCount = 1;
    for(let i = 1; i < str.length; i++) {
        if(str[i] === str[i-1]) {
            start = str[i-1];
            repeatCount+=1;
        } else {
            if(repeatCount === 1) {
                result += str[i-1];
            }
            const prepared = `${start}${repeatCount > 1 ? String(repeatCount) : ''}`;
            result += prepared;
            start = '';
            repeatCount = 1;
        }
    }

    return result;
}

console.log(LRU('AAAGBBCCCFTTA')) //A3B2C3FT2A