function solve() {
  let input = document.getElementById('text').value.toLowerCase().split(' ');
  let naming = document.getElementById('naming-convention').value.toLowerCase();
  let resultEl = document.getElementById('result');

  let result = '';
  if (input == '' || naming == '') return;
  
  if (naming === 'camel case') {
    result = input[0] + input
    .slice(1)
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join('');

    resultEl.innerText = result;

  } else if (naming === 'pascal case') {
    result = input
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join('');

    resultEl.innerText = result;
    
  } else {
    resultEl.innerText = 'Error!'
  }

}