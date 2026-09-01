import readline from 'readline/promises'
import {stdin as input , stdout as output} from 'process'
const rl = readline.createInterface({input,output})
let score1 = parseFloat(await rl.question("quelle est votre note du premier partie?"));
let score2 = parseFloat(await rl.question("quelle est votre note du deuxieme partie?"));
let score3 = parseFloat(await rl.question("quelle est votre note du troisieme partie?"));
let score4 = parseFloat(await rl.question("quelle est votre note du quatrieme partie?"));
let score_total = (score1+score2)+(score3+score4);
console.log(`Score total : ${score_total}`);
let score_finale = (score_total/4);
console.log(`Moyenne : ${score_finale}`);