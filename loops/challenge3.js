let prompt = require('prompt-sync')();
let N = +prompt("entrer le nombre N : ");
let Somme = 0;
console.log(`N = ${N}\n`);
for (let i = 1; i <= N; i++) {

    Somme = Somme + i;

}
console.log(`Somme = ${Somme}`);