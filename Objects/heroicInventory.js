function heroicInventory(input) {
    let heroes = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level); 
        items = items ? items.split(', ') : []; 

    if (name && level && items) {
        let hero = {
            name: name,
            level: level,
            items: items
        };

        heroes.push(hero);
    }
}

    console.log(JSON.stringify(heroes));
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);