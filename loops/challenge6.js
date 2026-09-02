let prompt = require('prompt-sync')();
let Departq = prompt("entrer le nombre du depart : ");
let Depart = Departq;
console.log(`Depart : ${Depart}`);
while (Depart >= 0){
    console.log(`${Depart}`);
    Depart--;
}