let somme = 0;
function calculerSomme(tab){
    for (x of tab){
        somme = somme + x ;
    }
    return somme;
}
console.log(calculerSomme([5,10,15]));