let prompt = require('prompt-sync')();

function findLargestElement(){
    let myarray = [];

    for (let i = 0; i < 5; i++){
        myarray[i] = +prompt(`entrer value number ${i + 1} : `);
    }

    let max = myarray[0];

    for (let i = 1; i < 5; i++){
        if (myarray[i] > max){
            max = myarray[i];
        }
    }

    console.log(max);
    console.log(myarray);
}

findLargestElement();