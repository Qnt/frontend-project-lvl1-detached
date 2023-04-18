import brainGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const gameRule =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number.toString(), correctAnswer];
};

const runBrainPrime = () => brainGameEngine(gameRule, generateRoundData);

export default runBrainPrime;
