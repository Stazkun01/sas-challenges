let prompt = require('prompt-sync')();
let N = +prompt("entrer le nombre N : ");
let r = 1;
for(let i = 1 ; i <= N ; i++){
    r = r * i;
}
console.log(`N = ${N}\n\n${N}! = ${r}`);