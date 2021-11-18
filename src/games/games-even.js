/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import {
  random, name, check, qa, win,
} from '../index.js';

const even = () => {
  const firstName = name();
  let rightAnswer = '';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const number = random(0, 100);
    const answer = qa(number);
    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else if (number % 2 === 1) {
      rightAnswer = 'no';
    }
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

export default even;
