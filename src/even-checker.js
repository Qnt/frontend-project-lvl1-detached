import readlineSync from 'readline-sync';
import getRandomNumber from './random.js';
import getUserName from './cli.js';

const isNumberEven = (number) => number % 2 === 0;

const runBrainEvenGame = (rounds) => {
  const greetingMessageBrainEven =
    'Answer "yes" if the number is even, otherwise answer "no".';
  const questionMessage = 'Question:';
  const answerMessage = 'Your answer:';
  const correctUserAnswerResponse = 'Correct!';
  const congratulationMessage = 'Congratulations';
  const yes = 'yes';
  const no = 'no';

  const userName = getUserName();
  console.log(greetingMessageBrainEven);
  for (let round = 0; round < rounds; round += 1) {
    const number = getRandomNumber();
    const evennes = isNumberEven(number);
    const correctAnswer = evennes ? yes : no;
    console.log(`${questionMessage} ${number}`);
    const userAnswer = readlineSync.question(answerMessage);
    if (
      (!evennes && userAnswer === yes) ||
      (evennes && userAnswer === no) ||
      (userAnswer !== yes && userAnswer !== no)
    ) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      break;
    }
    console.log(correctUserAnswerResponse);
    if (round === rounds - 1) {
      console.log(`${congratulationMessage}, ${userName}!`);
    }
  }
};

export default runBrainEvenGame;
