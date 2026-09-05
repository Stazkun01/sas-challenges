function ajouterALaFin(tab, element){
    let length = tab.length;
    for (let x of tab){
        tab[length] = element;
        return tab;
    }
}
console.log(ajouterALaFin([1, 2, 3], 4));