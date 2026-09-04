function compterLetter(chaine, lettre) {
    let counter = 0;
    let i;
    for (i of chaine) {
        if (i === lettre) {
            counter++;
        }
    }
    return counter;
}
console.log(compterLetter("heyyyyyy im currently learning js", "y"));