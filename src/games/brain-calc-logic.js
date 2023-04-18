import brainGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const gameRule = 'What is the result of the expression?';

const generateRoundData = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(operators.length)];
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  let correctAnswer = null;
  switch (operator) {
    case '+':
      correctAnswer = (firstOperand + secondOperand).toString();
      break;
    case '-':
      correctAnswer = (firstOperand - secondOperand).toString();
      break;
    case '*':
      correctAnswer = (firstOperand * secondOperand).toString();
      break;
    default:
      break;
  }
  return [question, correctAnswer];
};

const runBrainCalc = () => brainGameEngine(gameRule, generateRoundData);

export default runBrainCalc;
