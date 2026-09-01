import readline from 'readline/promises'
import {stdin as input , stdout as output} from 'process'
const rl = readline.createInterface({input,output});
let nombre = await rl.question("ecriver votre nombre preferer : ");
if (nombre > 0){
    console.log(`Nombre : ${nombre}\n`);
    console.log("votre nombre est positive !");
}
else if(nombre < 0){
    console.log(`Nombre : ${nombre}\n`);
    console.log("votre nombre est negative !");
}
else{
    console.log(`Nombre : ${nombre}\n`);
    console.log("votre nombre est egale a zero");
}

rl.close();