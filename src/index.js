import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const showQuestionMessage = (question) => {
  const questionMessage = 'Question:';
  console.log(`${questionMessage} ${question}`);
};

const getUserAnswer = () => {
  const questionAskingAnswer = 'Your answer: ';
  const userAnswer = readlineSync.question(questionAskingAnswer);
  return userAnswer;
};

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

const brainGameEngine = (gameRule, generateRoundData) => {
  const roundCount = 3;
  const userName = getUserName();

  console.log(gameRule);
  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctAnswer] = generateRoundData();
    showQuestionMessage(question);
    const userAnswer = getUserAnswer();
    if (userAnswer !== correctAnswer) {
      showGameOverMessage(userAnswer, correctAnswer, userName);
      break;
    }
    showConrrectUserAnswerMessage();
    if (round === roundCount - 1) {
      showConsgratulationMessage(userName);
    }
  }
};

export default brainGameEngine;
