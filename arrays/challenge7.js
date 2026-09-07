function supprimerDoublons(tab){
    let arr = [];
    for(let i = 0 ; i < tab.length ; i++){
        let alrseen = false;
        for (let j = 0 ; j < arr.length ; j++){
            if (arr[j] == tab[i]){
                 alrseen = true;
            }
        }
        if(!alrseen){
            arr[arr.length] = tab[i];
        }
    }
    return arr;
}
console.log(supprimerDoublons([1,2,2,3,4,4,1]))