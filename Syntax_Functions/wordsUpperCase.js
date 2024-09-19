function solve(input) {
    let str = input.toUpperCase();
    regex = /\b[A-Z0-9]+\b/g;
    let toPrint = str.match(regex);
    
    console.log(toPrint.join(', '));
        
}

solve('hello     dfdsf      sdfd*(%&#9 dsfsdf                  fdf')