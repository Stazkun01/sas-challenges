let prompt = require('prompt-sync')();
function isEvenOrNot(number){
    const ispair = number % 2 === 0;
    if (ispair){
        return "is even"
    }
    else{
        return "is Not"
    }
}
//console.log(isEvenOrNot(2));
//console.log(isEvenOrNot(5));
//console.log(isEvenOrNot(0));
let number = +prompt("entrer votre nombre : ");
console.log(isEvenOrNot(number));
