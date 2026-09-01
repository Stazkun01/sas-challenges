import readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({input,output})
let note_cc = await rl.question("quelle est votre note du controle continue ? ");
let note_project = await rl.question("quelle est votre note du Projet ? ");
let note_examenFinal = await rl.question("quelle est votre note du examen final ? ");
let note_Final = ((+note_cc * 2 + +note_project * 3 + +note_examenFinal * 5) / 10);
console.log(`Contrôle continu : ${note_cc} \nProjet : ${note_project}\nExamen : ${note_examenFinal}\n\nNote finale : ${note_Final}`);
rl.close();