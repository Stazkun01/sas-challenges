let prompt = require('prompt-sync')();
let GBq = prompt("what's the GB u wanna calculate : ") ;
let GB = +GBq;
let MB = GB * 1024;
console.log(`Stockage : ${GB} GB`);
console.log(`Resultat : ${MB} MB`);