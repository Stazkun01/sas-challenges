let prompt = require('prompt-sync')();
let Nq = prompt("entrer le nombre N : ");
let N = +Nq;
let xq = prompt("entrer le nombre X : ");
let x = +xq;
let mult = 0;
console.log(`N = ${N}`);
console.log(`x = ${x}\n`);
for (let i = 1; x*i <= N; i++) {
    mult = x * i;
    console.log(`${mult}`);
}