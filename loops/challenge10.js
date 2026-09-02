let prompt = require('prompt-sync')();

let n ;
let somme = 0;
let nv = -1;

do{
  n = +prompt('Saisie : ');
  somme = somme + n;
  nv++;
  
}while(n !== 0)
    console.log(`\n\nNombre de valeurs : ${nv}\nSomme : ${somme}`);
    
    