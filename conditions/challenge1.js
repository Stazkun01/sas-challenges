import readline from 'readline/promises'
import {stdin as input , stdout as output} from 'process'
const rl = readline.createInterface({input,output});
let age = parseInt(await rl.question("quelle est votre age ? "));
if (age >= 18){
    console.log("Acces autorise");
}
else {
    console.log("acces refuser");
}
rl.close()