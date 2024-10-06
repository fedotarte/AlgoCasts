function intToRoman(num) {
    const romanNumerals = new Map([
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]);

    let result = '';

    for (let [roman, value] of romanNumerals) {
        const count = Math.floor(num / value);
        if (count > 0) {
            result += roman.repeat(count);
            num -= value * count;
        }
    }

    return result;

    // for (let [roman, value] of romanNumerals) {
    //     while (num >= value) {
    //         result += roman;
    //         num -= value;
    //     }
    // }
}

// Пример использования:
console.log(intToRoman(1994));
console.log(intToRoman(2979));