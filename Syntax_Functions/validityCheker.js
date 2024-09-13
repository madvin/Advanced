function solve(x1, y1, x2, y2) {
  let distance = function (a, b, c, d) {
    return Math.sqrt((c - a) ** 2 + (d - b) ** 2);
  };
  let num1 = distance(x1, y1, 0, 0);
  let num2 = distance(x2, y2, 0, 0);
  let num3 = distance(x1, y1, x2, y2);
 
  if (Number.isInteger(num1)) {
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
  }
  if (Number.isInteger(num2)) {
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
  }
  if (Number.isInteger(num3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

solve(2, 1, 1, 1);
