let prompt = require("prompt-sync")();
let N = prompt("combien d'article voulais vous achetait : ");
let prix = 125 * N;
let reduction ;
let total;
if(N <= 0){
    console.log(`votre total est : 0`);
}
else if (N <= 1){
    console.log(`votre total est : 125`);
}
else if ( N > 1 ){
    for (let i = 0 ; i<=N ; i++){
        let helpred = i;
        reduction = helpred*2-2;
         if (reduction >100){
            reduction = 100;
         }
        total = prix- (prix * (reduction / 100));
    }
    
    console.log(`votre reduction est : ${reduction} %`);
    console.log(`votre total est : ${total} dh`);
}
