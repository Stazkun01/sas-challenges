function inverserTableau(tab){
    let backup;
    let left = 0 ;
    let right = tab.length -1;
    while (left < right ){
        backup = tab[left];
        tab[left] = tab[right];
        tab[right] = backup;
        left ++;
        right--;
    }
    return tab;
}
console.log(inverserTableau([1,2,3,4]));