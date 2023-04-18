import getRandomNumber from '../random.js';

// const generateQuestion = (blank, separator) => {
//   const progression = [getRandomNumber()];
//   const progressionLength = 10;
//   const progressionStep = getRandomNumber(progressionLength);
//   const blankIndex = getRandomNumber(progressionLength - 1);

//   for (let i = 0; i < progressionLength - 1; i += 1) {
//     progression.push(progression[i] + progressionStep);
//   }
//   progression[blankIndex] = blank;
//   return progression.join(separator);
// };

// const generateCorrectAnswer = (question, blank, separator) => {
//   const progression = question.split(separator);
//   const progressionStep = Number(progression[1]) - Number(progression[0]);
//   for (let i = 0; i < progression.length; i++);
// };

const generateQuestionAndAnswer = () => {
  const separator = ', ';
  const blank = '..';
  const progression = [getRandomNumber()];
  const progressionLength = 10;
  const progressionStep = getRandomNumber(progressionLength);
  const blankIndex = getRandomNumber(progressionLength - 1);

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  const correctAnswer = progression[blankIndex].toString();
  progression[blankIndex] = blank;

  return [progression.join(separator), correctAnswer];
};

export default generateQuestionAndAnswer;
