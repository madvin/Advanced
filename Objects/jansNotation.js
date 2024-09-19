function jansNotation(input) {
  let stack = [];

  for (let token of input) {
    if (typeof token === "number") {
      stack.push(token);
    } else {
      if (stack.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }

      let b = stack.pop();
      let a = stack.pop();

      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
      }

      stack.push(result);
    }
  }

  if (stack.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log(stack[0]);
  }
}

jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([15, "/"]);
