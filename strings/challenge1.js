function compterCaracteres(chaine){
    let i = 0 ;
    while(chaine[i] != chaine[-1]){
    i++;}
    return i
}
console.log(compterCaracteres("sas_is_exhausting"));