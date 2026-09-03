function convertirMontant(montant,taux,formatter){
    let value = montant * taux;
    return formatMAD(value)
}
function formatMAD(value){
    return value + " DH"
}
console.log(convertirMontant(100,10.50,formatMAD));