let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
function etudaff(students){
    let name ;
    for (let x in students) {
         console.log(students[x].name);
    }
    return ;
}


function noteaff(){
    for (let x in students) {
        console.log(students[x].note);
    }
    return;
}

 function admis0rNot(){
    let countadmis = 0 ;
    let countnonadmis = 0 ;
    for (let x in students) {
        if(students[x].note >= 10){
            console.log(`${students[x].name} est Admis`);
            countadmis++;
        }
        else if(students[x].note < 10){
            console.log(`${students[x].name} est Non Admis`);
            countnonadmis++;
        }
    }
    console.log( "Admis : " + countadmis + " Non Admis : " + countnonadmis);
}

function tous(){
    etudaff();
    noteaff();
    admis0rNot();
}
tous();