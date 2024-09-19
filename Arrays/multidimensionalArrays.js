function multidimensionalArrays(matrix) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let sum5 = 0;
  let sum6 = 0;

  let isEqual = false;

  for (let i = 0; i < matrix.length; i++) {
    let a = matrix[0][i];
    sum1 += a;
    let b = matrix[1][i];
    sum2 += b;
    let c = matrix[2][i];
    sum3 += c;
    let d = matrix[i][0];
    sum4 += d;
    let e = matrix[i][1];
    sum5 += e;
    let f = matrix[i][2];
    sum6 += f;
  }

  if (
    sum1 == sum2 &&
    sum2 == sum3 &&
    sum3 == sum4 &&
    sum4 == sum5 &&
    sum5 == sum6
  ) {
    isEqual = true;
  }
  if (matrix.length != 3) {
    isEqual = false;
  }

  return isEqual;
}

console.log(
  multidimensionalArrays([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
);
