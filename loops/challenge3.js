let prompt = require('prompt-sync')();
let Nq = prompt("entrer le nombre N : ");
let N = +Nq;
let Somme = 0;
console.log(`N = ${N}\n`);
for (let i = 1; i <= N; i++) {

    Somme = Somme + i;

}
console.log(`Somme = ${Somme}`);