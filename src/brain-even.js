/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import readlineSync from 'readline-sync';
import welcome from './cli.js';
import getRandomIntInclusive from './tools/random.js';

const even = () => {
  const name = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  for (; i < 3; i += 1) {
    const number = getRandomIntInclusive(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0) && (answer === 'yes')) {
      console.log('Correct!');
    } else if ((number % 2 === 1) && (answer === 'no')) {
      console.log('Correct!');
    } else if ((number % 2 === 0) && (answer !== 'yes')) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${name}`);
      break;
    } else if ((number % 2 === 1) && (answer !== 'no')) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default even;
