import readline from 'readline/promises';
import {stdin as input , stdout as output} from 'process';
const rl = readline.createInterface({input,output});
let duree = await rl.question(`qu'elle est la durée de votre film ? `);
if (duree < 60){
    console.log(`Durée : ${duree} minutes\nCatégorie : Court métrage`);
}
else if (duree > 60 && duree < 120){
    console.log(`Durée : ${duree} minutes\nCatégorie : Film standard`);
}
else {
    console.log(`Durée : ${duree} minutes\nCatégorie : Film long`);
}
rl.close();