const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const sumTotal = (total, atual) => total + atual;

function studentAverage() {
  const sumGrade = grades.map(studentGrades => {
    return (studentGrades.reduce(sumTotal)) / studentGrades.length;
  })

  const averageStudents = students.map( (student, index) => ({
    name: student,
    average: sumGrade[index]
  }))

  return averageStudents;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);