function subtract() {
    const firstEl = document.getElementById('firstNumber');
    const secondEl = document.getElementById('secondNumber');

    let result = document.getElementById('result');

    result = firstEl.value - secondEl.value;


    document.getElementById('result').innerText = result;
    
}