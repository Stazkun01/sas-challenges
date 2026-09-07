let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia",
        phrase: "Hey"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech",
        phrase: "hi"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi",
        phrase: "hello"
    }
];
console.log(students);
for(x in students){
    console.log(students[x].firstName);
    console.log(students[x].age);
    console.log(students[x].phrase);

}