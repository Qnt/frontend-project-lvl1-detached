import readlineSync from 'readline-sync';

const getUserName = () => {
  const initMessage = 'Welcome to the Brain Games!';
  const greeting = 'Hello';
  const questionAskingName = 'May I have your name? ';

  console.log(initMessage);
  console.log(`${greeting}, ${readlineSync.question(questionAskingName)}`);
};

export default getUserName;
