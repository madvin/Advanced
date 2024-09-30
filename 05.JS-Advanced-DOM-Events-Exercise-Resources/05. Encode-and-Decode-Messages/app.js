function encodeAndDecodeMessages() {
    
    const inputEl = document.querySelector('#main > div:nth-child(1) textarea');
    const outputEl = document.querySelector('#main > div:nth-child(2) textarea');

    const encodeButtonEl = document.querySelector('#main > div:nth-child(1) button');
    const decodeButtonEl = document.querySelector('#main > div:nth-child(2) button');

    let codedArr = [];
    let encodedArr = [];

    encodeButtonEl.addEventListener('click', encode); 
   
    function encode() {
        let arr = inputEl.value.split('');
        arr.forEach((el) => codedArr.push(el.charCodeAt(0) + 1));
        outputEl.value = codedArr.forEach(el => encodedArr.push(String.fromCharCode(el)));
        outputEl.value = encodedArr.join('')
        inputEl.value = '';
        codedArr = [];
        encodedArr = [];
        arr = [];
    }

    decodeButtonEl.addEventListener('click', decode); 

    function decode() {
        let tempArr = outputEl.value.split('');
        tempArr.forEach((el) => codedArr.push((Number(el.charCodeAt(0)) - 1)));
        let arr = [];
        codedArr.forEach((el) => arr.push(String.fromCharCode(el)));
        outputEl.value = arr.join('');
        arr = [];
        encodedArr = [];
        codedArr = [];
    }
}