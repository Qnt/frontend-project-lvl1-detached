import getRandomNumber from '../random.js';

const generateQuestionAndAnswer = () => {
  const yes = 'yes';
  const no = 'no';
  const number = getRandomNumber();
  const answer = number % 2 === 0 ? yes : no;
  return [number, answer];
};

export default generateQuestionAndAnswer;
