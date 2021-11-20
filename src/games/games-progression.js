import {
  random, name, check, qa, win,
} from '../index.js';

const progression = () => {
  const firstName = name();
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const start = random(0, 100);
    const diff = random(1, 10);
    const hide = random(0, 9);
    const question = [];
    let j = 0;
    const rightAnswer = start + diff * hide;
    while (j < 10) {
      if (j === hide) {
        question.push('..');
        j += 1;
      }
      question.push(start + diff * j);
      j += 1;
    }
    const answer = qa(question.join(' '));
    if (check(rightAnswer, Number(answer), firstName) === true) {
      i += 1;
    } else {
      break;
    }
  }
  if (i === 3) {
    win(firstName);
  }
};

export default progression;
