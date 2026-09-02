let prompt = require('prompt-sync')();
let i = 1;
let N = +prompt("entrer le nombre du depart : ");
console.log(`Nombre de mission : ${N}\n\n`);

do{
    
    let Score = i * 100;
    console.log(`Mission ${i} => Score : ${Score}`);
    i++;
    


}while(i<=N)
