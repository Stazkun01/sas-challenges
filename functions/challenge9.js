function creerCompteur(valeurInitiale=0){
    return function (){
        return valeurInitiale += 1
    }
    
}
    let moncompteur = creerCompteur(2);
    console.log(moncompteur());
    console.log(moncompteur());
    console.log(moncompteur());