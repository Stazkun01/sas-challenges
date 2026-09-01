let prompt = require('prompt-sync')();
let note = parseFloat(prompt("qu'elle est votre note"));

if (note<10){
    console.log(`Note : ${note} \nResultat :Non Admis`);
}
else if (note>=10){
    console.log(`Note : ${note} \nResultat : Admis`);
}
else{
    console.log(`Invalide note ! `);
}