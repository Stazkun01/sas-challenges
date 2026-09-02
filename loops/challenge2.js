let prompt = require('prompt-sync')();
let N = +prompt("entrer le nombre N : ");
console.log(`N = ${N}\n`);
for(let i = 2;i<=N;i = i + 2){
    console.log(`${i}`);
}