function storeCatalogue(products) {
    let catalogue = {};
    for (let entry of products) {
        let [productName, productPrice] = entry.split(' : ');
        productPrice = Number(productPrice); 
        let firstLetter = productName[0];

        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = [];
        }
        catalogue[firstLetter].push({ productName, productPrice });
    }

    let sortedCatalogueKeys = Object.keys(catalogue).sort();


    for (let letter of sortedCatalogueKeys) {
        console.log(letter);
        let sortedProducts = catalogue[letter].sort((a, b) => a.productName.localeCompare(b.productName));
        for (let product of sortedProducts) {
            console.log(`  ${product.productName}: ${product.productPrice}`);
        }
    }
}

storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])