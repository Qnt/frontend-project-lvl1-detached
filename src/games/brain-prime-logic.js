import getRandomNumber from '../random.js';

const getGameRule = () =>
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const yes = 'yes';
  const no = 'no';
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? yes : no;
  return [number.toString(), correctAnswer];
};

export { getGameRule, generateQuestionAndAnswer };
