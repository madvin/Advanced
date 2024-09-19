function rotateArray(arr, num) {
  for (let i = 1; i <= num; i++) {
    let rightBuffer = arr.pop();
    arr.unshift(rightBuffer);
  }
  console.log(arr.join(" "));
}

rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
