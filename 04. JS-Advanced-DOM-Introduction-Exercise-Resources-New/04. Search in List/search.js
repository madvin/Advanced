function search() {
   

   const townsEl = document.querySelector('#towns');
   const searchFieldEl = document.querySelector('#searchText');
   const resultEl = document.querySelector('#result');

   const input = searchFieldEl.value.toLowerCase();

   if (input == '') return;

   const townsArr = Array.from(townsEl.children);
   const towns = townsArr.map((el) => el.textContent.toLowerCase());

   townsArr.forEach((el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none'; 
   }));


   let resultArr = [];

  
for (let i = 0; i < towns.length; i++) {
   if (towns[i].indexOf(input) >= 0) {
      resultArr.push(i)
   }
      
}

   resultArr.forEach((position, index) => {
      townsEl.children[position].style.fontWeight = 'bold';
      townsEl.children[position].style.textDecoration = 'underline'; 
   });

   resultEl.innerText = `${resultArr.length} matches found`

   searchFieldEl.value = '';


   console.log(resultArr);
   
}
