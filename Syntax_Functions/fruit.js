function solve(fruit, weigthGrams, price) {
    let weigthKg = weigthGrams / 1000;

    let totalPrice = weigthKg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weigthKg.toFixed(2)} kilograms ${fruit}.`);
    
}


solve('apple', 1563, 2.35)