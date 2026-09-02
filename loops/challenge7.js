let prompt = require('prompt-sync')();
let N = +prompt("entrer le nombre du depart : ");
let multip = N*N;
console.log(`Resultat : ${N}`);
while (N*N < 100){
    N++;
}


console.log(`${N} x ${N} = ${multip}`);