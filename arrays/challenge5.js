function contientElement(tab,valeur){
    for (let x of tab){
        if(x === valeur){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(contientElement(["pomme", "banane"], "hey"));