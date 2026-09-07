let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
let penalties = 200 * employee.absenceDays;
console.log(employee.salary);
console.log(employee.bonus);
console.log(penalties);
console.log(employee.salary + employee.bonus - penalties);

