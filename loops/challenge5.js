let prompt = require('prompt-sync')();
let N = +prompt("entrer le nombre N : ");
let x = +prompt("entrer le nombre X : ");
let mult = 0;
console.log(`N = ${N}`);
console.log(`x = ${x}\n`);
for (let i = 1; x*i <= N; i++) {
    mult = x * i;
    console.log(`${mult}`);
}