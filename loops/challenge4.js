let prompt = require('prompt-sync')();
let N = +prompt("entrer le nombre N : ");
let mult = 0;
console.log(`N = ${N}\n`);
for (let i = 1; i <= 10; i++) {
    mult = N * i;
    console.log(`${N} x ${i} = ${mult}`);
}