let prompt = require('prompt-sync')();
let participents = +prompt("entrer le nombre des participents : ");
console.log(`Nombre de participants : ${participents}\n`);
for(let i = 1; i<=participents;i++){
    console.log(`Participent ${i}`);

}