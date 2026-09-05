function inverserTableau(tab){
    let length = tab.length
    for (let i = 0 ; i <length / 2;i++){
        let backup = tab[i];
        tab[i] = tab[length - 1 - i];
        tab[length - 1 - i]=backup;
    }
    return tab;
}
console.log(inverserTableau([1, 2, 3, 4]));