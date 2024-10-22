class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let messages = [];

        supplies.forEach(supplyInfo => {
            const [supplyName, supplyQuantityStr, supplyTotalPriceStr] = supplyInfo.split(" ");
            const supplyQuantity = parseInt(supplyQuantityStr);
            const supplyTotalPrice = parseInt(supplyTotalPriceStr);

            if (supplyTotalPrice <= this.initialBudget) {
                this.initialBudget -= supplyTotalPrice;

                if (this.supplyStock[supplyName]) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }
                messages.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                messages.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        });

        return messages.join("\n");
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        } else {
            this.roomAvailability[roomType] = {
                neededSupplies: neededSupplies.map(supply => {
                    const [name, quantity] = supply.split(" ");
                    return { name, quantity: parseInt(quantity) };
                }),
                pricePerNight: pricePerNight
            };
            const numberOfRoomTypes = Object.keys(this.roomAvailability).length;
            return `Great idea! Now with the ${roomType}, we have ${numberOfRoomTypes} types of rooms available, any other ideas?`;
        }
    }

    showAvailableRooms() {
        const roomTypes = Object.entries(this.roomAvailability)
            .map(([type, details]) => `${type} - $ ${details.pricePerNight}`);

        if (roomTypes.length > 0) {
            return roomTypes.join("\n");
        } else {
            return "Our rooms are not ready yet, please come back later...";
        }
    }

    bookRoom(roomType) {
        const room = this.roomAvailability[roomType];

        if (!room) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        for (const supply of room.neededSupplies) {
            if (!this.supplyStock[supply.name] || this.supplyStock[supply.name] < supply.quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`;
    }
}

let hotel = new Hotel(500);
console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

console.log(hotel.showAvailableRooms());

console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));