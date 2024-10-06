const rle = (str) => {
    let resStr="", count = 0;
    [...str].forEach((value, index)=>{
        if (value===str[index+1]){
            count++;
        }
        else{
            resStr+=value+(count===0 ? '' : ++count)
            count=0;
        }
    })
    return resStr;
}

console.log(rle("ABCDAEAABBXCCDDF"))

