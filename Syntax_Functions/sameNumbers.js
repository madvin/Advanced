function same(num) {
  let istrue = true;
  let numAsString = num.toString();
  let sum = 0;
  for (let i = 0; i < numAsString.length; i++) {
    let n = Number(numAsString[0]);
    sum += Number(numAsString[i]);
    if (Number(numAsString[i]) != n) {
      istrue = false;
    }
  }
  console.log(istrue);
  console.log(sum);
  
}

same(12345);
