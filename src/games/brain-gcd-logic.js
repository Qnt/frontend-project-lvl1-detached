import getRandomNumber from '../random.js';
import brainGameEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (Math.max(a, b) % Math.min(a, b) === 0) {
    return Math.min(a, b);
  }
  return getGCD(Math.min(a, b), Math.max(a, b) % Math.min(a, b));
};

const generateRoundData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const runBrainGCD = () => brainGameEngine(gameRule, generateRoundData);

export default runBrainGCD;
