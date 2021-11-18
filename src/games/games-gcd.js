import {
  random, name, check, qa, win,
} from '../index.js';
import { gcdQuestion } from '../tools/random-numbers.js';

const gcd = () => {
  const firstName = name();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const a = random(0, 100);
    const b = random(0, 100);
    const question = [a, b];
    const rightAnswer = gcdQuestion(a, b);
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

export default gcd;
