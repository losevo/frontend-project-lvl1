import {
  random, name, check, qa, win,
} from '../index.js';

const prime = () => {
  const firstName = name();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const question = random(1, 100);
    let j = 2;
    let k = 0;
    let rightAnswer = '';
    while (j < question / 2) {
      if (j * j <= question) {
        if (question % j === 0) {
          k = 1;
          break;
        }
        j += 1;
      } else if (j * j > question) {
        break;
      }
    }
    if (k === 1) {
      rightAnswer = 'no';
    } else {
      rightAnswer = 'yes';
    }
    const answer = qa(question);
    if (check(rightAnswer, answer, firstName) === true) {
      i += 1;
    } else {
      break;
    }
  }
  if (i === 3) {
    win(firstName);
  }
};

export default prime;
