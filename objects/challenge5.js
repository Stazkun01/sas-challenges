let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
function affichersold(){
    return account.balance;
}
// console.log(affichersold());

function depositargent(added){
    
    if(added < 0){
        return "entrer un montant positive !";        
    }
    else{
        account.balance = added + account.balance;
        return account.balance;
        
    }
    
}
// console.log(depositargent(100));
function withdrawArgent(removed){
    if(removed > account.balance){
        return "entrer un montant positive !";        
    }
    else{
        account.balance = account.balance - removed;
        return account.balance;
        
    }
}
function verification(){
    if(account.balance>0){
        return `votre solde est suffisant ! `;
    }
    else{
        return `votre solde est insuffisant ! `;
    }
}
function info(){
    return "OWNER : " + account.owner +  " | BALANCE : " + account.balance + " | TYPE : " + account.type; 
}
function tous(added ,removed){
    console.log(affichersold());
    console.log(depositargent(added));
    console.log(withdrawArgent(removed));
    console.log(verification());
    console.log(info());
}
tous(200,50);