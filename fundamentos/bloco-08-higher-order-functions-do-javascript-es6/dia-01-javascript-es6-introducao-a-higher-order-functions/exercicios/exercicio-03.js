const resultTest = (template, answer, callback) => {
  return callback(template, answer);
}

const checkResult = (template, answer) => {
  let total = 0;

  for (let i = 0; i < template.length; i += 1) {
    if (template[i] === answer[i]) {
      total += 1
    } else if (answer[i] === 'N.A') {
      total -= 0;
    } else {
      total -= 0.5;
    }
  }

  return total;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(resultTest(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResult));