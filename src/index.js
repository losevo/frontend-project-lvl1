/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import readlineSync from 'readline-sync';
import welcome from './cli.js';
import { getRandomIntInclusive } from './tools/random.js';

export const name = () => welcome();

export const random = (min, max) => getRandomIntInclusive(min, max);

export const check = (rightAnswer, answer, firstName) => {
  if (rightAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
  console.log(`Let's try again, ${firstName}!`);
  return false;
};

export const qa = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const win = (firstName) => console.log(`Congratulations, ${firstName}!`);
