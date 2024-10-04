function attachEventsListeners() {
    const buttonEl = document.querySelector('#convert');
    const inputDistEl = document.querySelector('#inputDistance');
    const outputDistEl = document.querySelector('#outputDistance');
    const inputUnitsEl = document.querySelector('#inputUnits');
    const outputUnitsEl = document.querySelector('#outputUnits');

    const units = {
        mm: 1,
        cm: 10,
        m: 1000,
        km: 1000000,
        in: 25.4,
        ft: 304.8,
        yrd: 914.4,
        mi: 1609344
    }

    buttonEl.addEventListener('click', convert);

    function convert() {
        let input = Number(inputDistEl.value);
        let type = inputUnitsEl.value;
        let convertedType = outputUnitsEl.value;
        let output = (input * units[type] / units[convertedType]).toFixed(4);

        outputDistEl.value = output;
        
        
    }
    
}
