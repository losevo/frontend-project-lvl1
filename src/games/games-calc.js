import { getRandomQuestion } from '../tools/random.js';
import {
  random, name, check, qa, win,
} from '../index.js';

const calc = () => {
  const firstName = name();
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const a = random(0, 100);
    const b = random(0, 100);
    const [rightAnswer, question] = getRandomQuestion(a, b);
    const answer = qa(question);
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

export default calc;
