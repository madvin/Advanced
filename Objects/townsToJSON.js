function townsToJson(input) {
   
    input.shift();

    let result = [];

    for (let line of input) {
      
        let [town, latitude, longitude] = line
            .split('|')
            .map(x => x.trim())
            .filter(x => x.length > 0); 

       
        let townObj = {
            Town: town,
            Latitude: Number(parseFloat(latitude).toFixed(2)),  
            Longitude: Number(parseFloat(longitude).toFixed(2)) 
        };

        result.push(townObj);
    }

    return JSON.stringify(result);
}
console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))