let prompt = require('prompt-sync')();
let idprompt = +prompt("enter the id you're looking for : ");
let found = false;
let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];

for(let x in students){
    if(students[x].id === idprompt){
        console.log(`Étudiant trouvé !\n\nID : ${students[x].id}\nNom : ${students[x].name}\nAge : ${students[x].age}`);
        found = true;
    }
}
if (!found){
        console.log("Aucun étudiant trouvé avec cet ID.")
    }