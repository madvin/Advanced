function lowestPricesInCities(input) {
    let productData = {};

    for (let entry of input) {
    
        let [town, product, price] = entry.split(' | ');
        price = Number(price); 

        
        if (!productData[product] || productData[product].price > price) {
            productData[product] = { price, town };
        }
    }


    for (let product in productData) {
        console.log(`${product} -> ${productData[product].price} (${productData[product].town})`);
    }
}


lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);