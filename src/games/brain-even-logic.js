import getRandomNumber from '../random.js';

const getGameRule = () =>
  'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const yes = 'yes';
  const no = 'no';
  const number = getRandomNumber();
  const answer = number % 2 === 0 ? yes : no;
  return [number, answer];
};

export { getGameRule, generateQuestionAndAnswer };
