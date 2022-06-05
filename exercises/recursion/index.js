const callSeveralTimes = (i, fn, ...par) => {
    if (i > 0) {
        fn(...par);
        callSeveralTimes(i - 1, fn, ...par);
    }
}

console.log(callSeveralTimes(3, Math.pow, 3, 2)); 