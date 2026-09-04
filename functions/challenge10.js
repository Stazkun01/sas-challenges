// function traiterMessage(text , ...transformation){
//     let result = text ;
//     for (let i of transformation){
//         result = i(result);
//     }
//     return result

// }
let transformation = [nettoyerEspaces, mettreEnMajuscule , ajouterPrefixe];
function traiterMessage(text , transformation){
    let result = text ;
    for (let i of transformation){
        result = i(result);
    }
    return result

}
function nettoyerEspaces(text){
    return text.trim(); 
}
//console.log(nettoyerEspaces("  a fen a sahbi cava ??   "));
function mettreEnMajuscule(text){
    return text.toUpperCase();
}
//console.log(mettreEnMajuscule("hi cv alik ?"));
function ajouterPrefixe(text, prefixe = "LOG: "){
    return prefixe + text;
}
//console.log(ajouterPrefixe("heyyyyy"));
console.log(traiterMessage("  bonjour  ", transformation));