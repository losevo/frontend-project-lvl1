export const getRandomIntInclusive = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + min;
};

export const getRandomQuestion = (a, b) => {
  const operatorArray = ['+', '-', '*'];
  const operator = operatorArray[getRandomIntInclusive(0, 2)];
  let rightAnswer = 0;
  if (operator === '+') {
    rightAnswer = a + b;
  } else if (operator === '-') {
    rightAnswer = a - b;
  } else if (operator === '*') {
    rightAnswer = a * b;
  }
  const questionArray = [a, operator, b];
  const question = questionArray.join(' ');
  return [rightAnswer, question];
};
