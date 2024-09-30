function addItem() {

    const inputTextEl = document.querySelector('#newItemText');
    const inputValueEl = document.querySelector('#newItemValue');

    const newOption = document.querySelector('#menu');

    const newItem = document.createElement('option');
    newItem.textContent = inputTextEl.value;
    newItem.setAttribute('value', inputValueEl.value);

    newOption.appendChild(newItem);


    inputTextEl.value = '';
    inputValueEl.value = '';

    inputTextEl.focus();

}