function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let workers = JSON.parse(document.querySelector('#inputs textarea').value);
    console.log(workers);
         }

}