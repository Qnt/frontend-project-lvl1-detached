import getRandomNumber from '../random.js';
import brainGameEngine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const number = getRandomNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const runBrainEven = () => brainGameEngine(gameRule, generateRoundData);

export default runBrainEven;
