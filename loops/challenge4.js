let prompt = require('prompt-sync')();
let Nq = prompt("entrer le nombre N : ");
let N = +Nq;
let mult = 0;
console.log(`N = ${N}\n`);
for (let i = 1; i <= 10; i++) {
    mult = N * i;
    console.log(`${N} x ${i} = ${mult}`);
}