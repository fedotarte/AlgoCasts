/**
 * 
 * @param {string} s
 * @returns {boolean} 
 */
const isVaidPars = (s) => {

    // делаем обратную мапу закрытых на открытые
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    // делаем ебучий стек
    const stack = [];

    for (const i = 0, i<s.length; i++) {
        // скобка из строки
        const bracket = s[i];
        // либо открытая скобка либо пустошь
        const openedBracket = brackets[bracket];
        // набор закрывающих скобок
        const closedBrackets = Object.keys(brackets);
        // если попалась закрывающая
        if (closedBrackets.includes(bracket)) {
            //проверяем что последняя в стеке открытая и совпадает по типу с текущей закрывающей
            if (openedBracket !== stack.pop()) return false
            //отрабатывает на открывающие скобочки
            else {
                // пушим открывающую
                stack.push(s[i]);
            }
        }
    }
    // в конце стек должен быть пустой
    return stack.length === 0;
}
