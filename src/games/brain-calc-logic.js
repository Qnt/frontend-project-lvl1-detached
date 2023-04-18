import getRandomNumber from '../random.js';

const getGameRule = () => 'What is the result of the expression?';

const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(operators.length)];
  return `${getRandomNumber()} ${operator} ${getRandomNumber()}`;
};

const generateCorrectAnswer = (question) => {
  const questionSplitter = question.split(' ');
  const firstOperandIndex = 0;
  const operatorIndex = 1;
  const secondOperandIndex = 2;
  const operator = questionSplitter[operatorIndex];
  const firstOperand = Number(questionSplitter[firstOperandIndex]);
  const secondOperand = Number(questionSplitter[secondOperandIndex]);
  switch (operator) {
    case '+':
      return (firstOperand + secondOperand).toString();
    case '-':
      return (firstOperand - secondOperand).toString();
    case '*':
      return (firstOperand * secondOperand).toString();
    default:
      return '';
  }
};

const generateQuestionAndAnswer = () => {
  const question = generateQuestion();
  const correctAnswer = generateCorrectAnswer(question);

  return [question, correctAnswer];
};

export { getGameRule, generateQuestionAndAnswer };
