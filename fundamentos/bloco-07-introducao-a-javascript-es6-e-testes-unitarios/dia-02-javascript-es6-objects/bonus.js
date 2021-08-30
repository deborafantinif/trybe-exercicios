const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Bonus 01
const studentsWatch = (object, materia) => {
  let studentsMateria = 0;
  for (key in object) {
    if (object[key].materia === materia) {
      studentsMateria += object[key].numeroEstudantes;
    }
  }
  return studentsMateria;
}
console.log(studentsWatch(allLessons, 'Matemática'))


// Bonus 02
const createReport = (object, teacher) => {
  const report = {
    professor: teacher,
    aulas: [],
    estudates: 0
  }

  for (key in object) {
    if (object[key].professor === teacher) {
      report.aulas.push(object[key].materia);
      report.estudates += object[key].numeroEstudantes;
    }
  }

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))