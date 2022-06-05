const START_WORK = 9;
const END_WORK = 18;
const ABS_TIME = [[9, 10], [15, 17], [14, 16]]
const expected = [[10, 14], [17, 18]]


const getActWorkplaceTime = (inpAbs = ABS_TIME, startWorkTime = START_WORK, endWorkTime = END_WORK) => {
    const workingHours = [];
    for (let i = 0; i <= END_WORK - START_WORK; i++) {
        workingHours.push(i + START_WORK);
    }
    const fl = inpAbs.flatMap((x,i) => {
        const calculatedTime = []
        if(i%2===1){
            workingHours.splice(workingHours.indexOf(x),1);
        }
        else{

        }
    });

}

// getActWorkplaceTime();


console.log([1, 2, 3].indexOf(1));
if (-1) {
    console.log('shhh');
}