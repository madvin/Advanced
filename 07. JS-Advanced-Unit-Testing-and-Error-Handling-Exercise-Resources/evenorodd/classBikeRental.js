class BikeRentalService {
    name;
    location;
    availableBikes;
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }
 
    addBikes(bikes) {
        let resultSet = new Set();
        for (const curEl of bikes) {
            let tokens = curEl.split('-');
            let [brand, quantity, price] = tokens;
            quantity = Number(quantity);
            price = Number(price);
 
            let curObj = this.availableBikes.find(curEl => curEl.brand == brand);
            if (curObj) {
                curObj.quantity += quantity;
                if (curObj.price < price) {
                    curObj.price = price;
                }
            }
            else {
                this.availableBikes.push({ brand, quantity, price });
                resultSet.add(brand);
            }
        }
        let resultArr = [...resultSet];
        if (resultArr.length > 0) {
            return `Successfully added ${resultArr.join(', ')}`;
        }
    }
    rentBikes(selectedBikes) {
        let isBikeValid = true;
        let totalPrice = 0;
        for (const curEl of selectedBikes) {
            let tokens = curEl.split('-');
            let [brand, quantity] = tokens;
            quantity = Number(quantity);
            let curObj = this.availableBikes.find(curEl => curEl.brand == brand);
            if (!curObj || quantity > curObj.quantity) {
                isBikeValid = false;
            }
            else {
                totalPrice += curObj.price * quantity;
                curObj.quantity -= quantity;
            }
        }
        if (isBikeValid) return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
        return 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
    }
 
    returnBikes(returnedBikes) {
        let isBikeValid = true;
        for (const curEl of returnedBikes) {
            let tokens = curEl.split('-');
            let [brand, quantity] = tokens;
            quantity = Number(quantity);
            let curObj = this.availableBikes.find(curEl => curEl.brand == brand);
            if (!curObj) {
                isBikeValid = false;
            }
            else {
                curObj.quantity += quantity;
            }
        }
        if (isBikeValid) return 'Thank you for returning!';
        return 'Some of the returned bikes are not from our selection.';
    }
 
    revision() {
        let resultArr = [];
        resultArr.push('Available bikes:');
        this.availableBikes.sort((a, b) => a.price - b.price);
        for (const curEl of this.availableBikes) {
            resultArr.push(`${curEl.brand} quantity:${curEl.quantity} price:$${curEl.price}`);
        }
        resultArr.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);
 
        return resultArr.join('\n');
    }
}