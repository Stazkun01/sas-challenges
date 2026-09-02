import readline from 'readline/promises'
import {stdin as input , stdout as output} from 'process'
const rl = readline.createInterface({input,output});
let ageq = await rl.question("quelle est votre age ? ");
let age = +ageq;
if (age >= 18){
    console.log("Acces autorise");
}
else {
    console.log("acces refuser");
}
rl.close()