const employees = [
  {
    "name": "Alice Johnson",
    "age": 29,
    "department": "Engineering",
    "salary": 75000
  },
  {
    "name": "Bob Smith",
    "age": 34,
    "department": "Marketing",
    "salary": 68000
  },
  {
    "name": "Carol Williams",
    "age": 41,
    "department": "Finance",
    "salary": 82000
  },
  {
    "name": "David Brown",
    "age": 26,
    "department": "Human Resources",
    "salary": 61000
  }
]
function moyenage(employees){
    let somme = 0;
    let avgage = 0;
    for(x in employees){
        somme = somme + employees[x].age;
    }
    avgage = somme / employees.length;
    return avgage;
}
console.log(moyenage(employees));

function countByDep(employees,department){
    let count = 0;
    for(x in employees){
        if (x.department === department){
            count++;
        }
    }
    return count;
}
console.log(countByDep(employees,"Finance"));

function Maxsalary(employees){
    let max = 0;
    for(x in employees){
        if(employees[x].salary > max){
            max = employees[x].salary;
        }
    }
    return max;
}
console.log(Maxsalary(employees));