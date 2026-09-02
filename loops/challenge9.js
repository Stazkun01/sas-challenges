let prompt = require('prompt-sync')();
let i = 1;
let base = +prompt("entrer le nombre du base :")
let exposant = +prompt("entrer le nombre d'exposant : ");
let pow = 1;
while(i<=exposant){
    pow = pow * base;
    i++;
}
console.log(`Base : ${base}\nExposant : ${exposant}\n\nRésultat : ${pow}`);