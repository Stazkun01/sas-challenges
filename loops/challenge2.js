let prompt = require('prompt-sync')();
let Nq = prompt("entrer le nombre N : ");
let N = +Nq;
console.log(`N = ${N}\n`);
for(let i = 2;i<=N;i = i + 2){
    console.log(`${i}`);
}