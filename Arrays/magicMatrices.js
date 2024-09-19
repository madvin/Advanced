function magicMatrices(arr) {
    let isMagic = false;

    let sumColumns = 0;
    let sumRows = 0;
    let iAx = 0;
    let jAx = 0;

    for (let i = 0; i < arr.length; i++) {
        sumRows += arr[iAx][i];
        for (let j = 0; j < arr[i].length; j++) {
           sumColumns += arr[i][jAx];
           if (sumColumns == sumRows) {
            isMagic = true;
            iAx++
           }            
         
        }
    }
    console.log(sumRows);
    
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])