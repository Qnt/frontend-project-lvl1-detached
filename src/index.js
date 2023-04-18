import readlineSync from 'readline-sync';
import getUserName from './cli.js';
import * as brainEven from './games/brain-even-logic.js';
import * as brainCalc from './games/brain-calc-logic.js';
import * as brainGCD from './games/brain-gcd-logic.js';
import * as brainProgression from './games/brain-progression-logic.js';
import * as brainPrime from './games/brain-prime-logic.js';

const showGameRuleMessage = (gameType) => {
  switch (gameType) {
    case 'brain-even':
      console.log(brainEven.getGameRule());
      break;
    case 'brain-calc':
      console.log(brainCalc.getGameRule());
      break;
    case 'brain-gcd':
      console.log(brainGCD.getGameRule());
      break;
    case 'brain-progression':
      console.log(brainProgression.getGameRule());
      break;
    case 'brain-prime':
      console.log(brainPrime.getGameRule());
      break;
    default:
      break;
  }
};

const showQuestionMessage = (question) => {
  const questionMessage = 'Question:';
  console.log(`${questionMessage} ${question}`);
};

const getUserAnswer = () => {
  const questionAskingAnswer = 'Your answer: ';
  const userAnswer = readlineSync.question(questionAskingAnswer);
  return userAnswer;
};

const isUserAnswerCorrect = (userAnswer, correctAnswer) =>
  userAnswer === correctAnswer;

const showConrrectUserAnswerMessage = () => {
  const correctUserAnswerMessage = 'Correct!';
  console.log(correctUserAnswerMessage);
};

const showGameOverMessage = (userAnswer, correctAnswer, userName) => {
  const gameOverMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  console.log(gameOverMessage);
};

const showConsgratulationMessage = (userName) => {
  const congratulationMessage = 'Congratulations';
  console.log(`${congratulationMessage}, ${userName}!`);
};

const generateQuestionAndAnswer = (gameType) => {
  switch (gameType) {
    case 'brain-even':
      return brainEven.generateQuestionAndAnswer();
    case 'brain-calc':
      return brainCalc.generateQuestionAndAnswer();
    case 'brain-gcd':
      return brainGCD.generateQuestionAndAnswer();
    case 'brain-progression':
      return brainProgression.generateQuestionAndAnswer();
    case 'brain-prime':
      return brainPrime.generateQuestionAndAnswer();
    default:
      return [];
  }
};

const runBrainGame = (gameType) => {
  const roundCount = 3;
  const userName = getUserName();

  showGameRuleMessage(gameType);
  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer(gameType);
    showQuestionMessage(question);
    const userAnswer = getUserAnswer();
    if (!isUserAnswerCorrect(userAnswer, correctAnswer)) {
      showGameOverMessage(userAnswer, correctAnswer, userName);
      break;
    }
    showConrrectUserAnswerMessage();
    if (round === roundCount - 1) {
      showConsgratulationMessage(userName);
    }
  }
};

export default runBrainGame;
