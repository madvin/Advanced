function solve() {

    const rowsEl = [...document.querySelectorAll('#exercise table tbody tr')];
    const tableEl = document.querySelector('table');
    const messageEl = document.querySelector('#check p');

    const btnCheck = document.querySelectorAll('button')[0];
    const btnReset = document.querySelectorAll('button')[1];

    const firstRowEl = rowsEl[0];
    const secondRowEl = rowsEl[1];
    const thirdRowEl = rowsEl[2];

    const firstColumnEl = [...document.querySelectorAll('tbody tr td:nth-child(1)')];
    const secondColumnEl = [...document.querySelectorAll('tbody tr td:nth-child(2)')];
    const thirdColumnEl = [...document.querySelectorAll('tbody tr td:nth-child(3)')];

   
    const firstRowValues = [...firstRowEl.querySelectorAll('td')];
    const secondRowValues = [...secondRowEl.querySelectorAll('td')];
    const thirdRowValues = [...thirdRowEl.querySelectorAll('td')];

    btnCheck.addEventListener('click', e => {
    if ((check(firstColumnEl)) && (check(secondColumnEl)) &&
    (check(thirdColumnEl)) && (check(firstRowValues)) &&
    (check(secondRowValues)) && (check(thirdRowValues))) {
        tableEl.style.border = '2px solid green';
        messageEl.textContent = 'You solve it! Congratulations';
        messageEl.style.color = 'green';
    } else {  
        tableEl.style.border = '2px solid red';
        messageEl.textContent = 'NOP! You are not done yet...';
        messageEl.style.color = 'red'
    }
});
    btnReset.addEventListener('click', e => {
        tableEl.style.border = '';
        messageEl.textContent = '';
        [...tableEl.querySelectorAll('input[type="number"]')].forEach(input => {
            input.value = '';
        })
    });
    function check(boxes) {
        let isDifferent = null;
        let checkArr = new Set;  
        let item = boxes.forEach((el) => {
            
            let curEl = el.innerHTML.split('"').trim();
            console.log(curEl[7]);
            
            checkArr.add(curEl);
        });
       
        
        if (checkArr.size < 3) {
            isDifferent = false;
        } else {
            isDifferent = true;
        }
                
        return isDifferent; 
    }
}