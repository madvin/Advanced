function solve(num, act1, act2, act3, act4, act5) {
  let actions = [act1, act2, act3, act4, act5];
  num = Number(num);
  for (const act of actions) {
    switch (act) {
      case "chop":
        num /= 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num);
        console.log(num);
        break;
      case "spice":
        num += 1;
        console.log(num);
        break;
      case "bake":
        num *= 3;
        console.log(num);
        break;
      case "fillet":
        num *= 0.8;
        console.log(num);
        break;
    }
  }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
