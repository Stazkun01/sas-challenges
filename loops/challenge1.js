let prompt = require('prompt-sync')();
let participentsq = prompt("entrer le nombre des participents : ");
let participents = +participentsq;
console.log(`Nombre de participants : ${participents}\n`);
for(let i = 1; i<=participents;i++){
    console.log(`Participent ${i}`);

}