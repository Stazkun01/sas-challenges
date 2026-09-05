function trouverMax(tab){
    let max = tab[0];
    for (let i = 1 ; i < tab.length ; i++){
        if(tab[i] > max){
            max = tab[i] ;
        }
    }
    return max;
}
console.log(trouverMax([12, 45, 7, 89, 23]));