// Array 1: Students
const students = [
  {
    id: 1,
    name: "Ahmed",
    age: 20,
    class: "DEV101"
  },
  {
    id: 2,
    name: "Sara",
    age: 22,
    class: "DEV101"
  },
  {
    id: 3,
    name: "Youssef",
    age: 21,
    class: "DEV102"
  },
  {
    id: 4,
    name: "Imane",
    age: 19,
    class: "DEV102"
  }
];


// Array 2: Absence follow-up
const absences = [
  {
    studentId: 1,
    subjectId: 101,
    subject: "JavaScript",
    absences: 2
  },
  {
    studentId: 1,
    subjectId: 102,
    subject: "HTML",
    absences: 1
  },
  {
    studentId: 2,
    subjectId: 101,
    subject: "JavaScript",
    absences: 4
  },
  {
    studentId: 2,
    subjectId: 103,
    subject: "CSS",
    absences: 2
  },
  {
    studentId: 3,
    subjectId: 101,
    subject: "JavaScript",
    absences: 1
  },
  {
    studentId: 3,
    subjectId: 102,
    subject: "HTML",
    absences: 3
  },
  {
    studentId: 4,
    subjectId: 103,
    subject: "CSS",
    absences: 5
  }
];
//Questions:
// Display all the absence records with the student's name instead of the studentId.
// Find the student who has the highest total number of absences in all subjects.
// Display all students who have more than 2 absences in JavaScript.
function studentrec(students, abscenceslist) {
  for (let x in students) {
    for (let f in abscenceslist) {
      if (abscenceslist[f].studentId === students[x].id) {
        console.log(`${students[x].name} subjectId: ${abscenceslist[f].subjectId},  subject: ${abscenceslist[f].subject},   absences: ${abscenceslist[f].absences}`);
      }
    }
  }
}
studentrec(students, absences);

function maxabscent(students, abscenceslist) {
  let max = 0;
  let maxStudent = "";
  for (let x in students) {
    let perstotal = 0;
    for (let f in abscenceslist) {
      if (abscenceslist[f].studentId === students[x].id) {
        perstotal = abscenceslist[f].absences + perstotal;
        if (perstotal > max) {
          max = perstotal;
          maxStudent = students[x].name
        }
      }
    }
  }
  console.log(`${maxStudent} has ${max} abscences`)
}
maxabscent(students, absences);

function jscheck(students, abscenceslist) {
  for (let x in students) {
    for (let f in abscenceslist) {
      if (abscenceslist[f].studentId === students[x].id) {
        {
          if (abscenceslist[f].absences > 2 && abscenceslist[f].subject === "JavaScript") {
            console.log(students[x].name);
          }
        }
      }
    }
  }
}
  jscheck(students, absences);