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

// Exercício 01
const createKey = (object, nameKey, value) => object[nameKey] = value;

createKey(lesson2, 'turno', 'tarde');


// Exercício 02
const listKeys = object => Object.keys(object);


// Exercício 03
const sizeObject = object => Object.keys(object).length;


// Exercício 04
const listValues = object => Object.values(object);


// Exercício 05
const allLessons = {}
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);
// Outro metódo abaixo -> gabarito
// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });


// Exercício 06
const numberStudent = object => {
  let students = 0;
  for (keyObj in object) {
    const studentsLesson = object[keyObj]['numeroEstudantes'];
    students += studentsLesson;
  }
  return students;
}


// Exercício 07
const getValueByNumber = (object, index) => Object.values(object)[index];


// Exercício 08
const verifyPair = (object, key, value) => {
  const arrayObject = Object.entries(object);

  for (let i = 0; i < arrayObject.length; i += 1) {
    if (arrayObject[i][0] === key && arrayObject[i][1] === value) {
      return true;
    }
  }
  return false;
}
