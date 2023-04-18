import brainGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const gameRule = 'What number is missing in the progression?';

const generateRoundData = () => {
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

const runBrainProgression = () => brainGameEngine(gameRule, generateRoundData);

export default runBrainProgression;
