function solve() {
    const messageEl = document.querySelector('#check p');
    const tableEl = document.querySelector('table');

    const btnCheck = document.querySelectorAll('button')[0];
    const btnReset = document.querySelectorAll('button')[1];

    btnCheck.addEventListener('click', (e) => {
        const rows = [...tableEl.querySelectorAll('table tbody tr')];
        let isReady = false;


        rows.forEach(row => {
            const rowValues = [...row.querySelectorAll('input')].map(i => Number(i.value));

            const currentSet = new Set(rowValues);
            if (currentSet.size == 3) {
                isReady = true;
            } else {
                tableEl.style.border = '2px solid red';
                check.style.color = 'red';
                messageEl.textContent = 'NOP! You are not done yet...';
                return;
            }
        });
        const columnValuesOne = [...tableEl.querySelectorAll('tbody tr td:nth-child(1)')];
        const columnValuesTwo = [...tableEl.querySelectorAll('tbody tr td:nth-child(2)')];
        const columnValuesThree = [...tableEl.querySelectorAll('tbody tr td:nth-child(3)')];

        let firstCol = new Set;
        let secondCol = new Set;
        let thirdCol = new Set;
        
        columnValuesOne.forEach(column => {
            const value = Number([...column.querySelectorAll('input')].map(i => i.value));
            firstCol.add(value);
            
        });
        columnValuesTwo.forEach(column => {
            const value = Number([...column.querySelectorAll('input')].map(i => i.value));
            secondCol.add(value);
            
        });
        columnValuesThree.forEach(column => {
            const value = Number([...column.querySelectorAll('input')].map(i => i.value));
            thirdCol.add(value);
            
        });
        if (firstCol.size == 3 && secondCol.size == 3 && thirdCol.size == 3) {
            isReady = true;
            tableEl.style.border = '2px solid green';
            check.style.color = 'green';
            messageEl.textContent = 'You solve it! Congratulations!';
        } else {
            isReady = false;
            tableEl.style.border = '2px solid red';
            check.style.color = 'red';
            messageEl.textContent = 'NOP! You are not done yet...';
            firstCol = [];
            secondCol = [];
            thirdCol = [];
            return;
        }
            firstCol = [];
            secondCol = [];
            thirdCol = [];
    });

    
    btnReset.addEventListener('click', (e) => {
        tableEl.style.border = '';
        messageEl.textContent = '';

        [...tableEl.querySelectorAll('input[type="number"]')].forEach(input => {
            input.value = '';
        });

    });
   }