function extractIncreasing(arr) {

    let biggestNum = Number.MIN_SAFE_INTEGER;
    let ArrToPrint = [];

    for (let num of arr) {
        if (num >= biggestNum) {
            ArrToPrint.push(num);
            biggestNum = num;
        }
    }
    return ArrToPrint;
}


extractIncreasing([20, 
    3, 
    2, 
    15,
    6, 
    1])