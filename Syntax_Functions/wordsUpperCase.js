function solve(input) {
    let str = input.toUpperCase();
    regex = /\b[A-Z]+\b/g;
    let toPrint = str.match(regex);
    
    console.log(toPrint.join(', '));
        
}

solve('hello     dfdsf      sdfd*(%&#9 dsfsdf                  fdf')