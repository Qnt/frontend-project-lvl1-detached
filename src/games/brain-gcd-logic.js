import getRandomNumber from '../random.js';

const generateQuestion = () =>
  `${getRandomNumber(100)} ${getRandomNumber(100)}`;

const getGCD = (a, b) => {
  if (Math.max(a, b) % Math.min(a, b) === 0) {
    return Math.min(a, b);
  }
  return getGCD(Math.min(a, b), Math.max(a, b) % Math.min(a, b));
};

const generateCorrectAnswer = (question) => {
  const firstNumber = question.split(' ')[0];
  const secondNumber = question.split(' ')[1];
  return getGCD(firstNumber, secondNumber).toString();
};

const generateQuestionAndAnswer = () => {
  const question = generateQuestion();
  return [question, generateCorrectAnswer(question)];
};

export default generateQuestionAndAnswer;
