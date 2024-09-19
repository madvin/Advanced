function addAndRemoveElements(arr) {
  let initialNum = 1;
  let newArr = [];

  for (let command of arr) {
    if (command === "add") {
      newArr.push(initialNum);
    } else {
      newArr.pop();
    }
    initialNum++;
  }
  if (newArr.length == 0) {
    console.log("Empty");
    return;
  }
  console.log(newArr.join("\n"));
}

addAndRemoveElements(["remove", "remove", "remove"]);
