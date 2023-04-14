import readlineSync from 'readline-sync';

const getUserName = () => {
  const initMessage = 'Welcome to the Brain Games!';
  const greeting = 'Hello';
  const questionAskingName = 'May I have your name? ';

  console.log(initMessage);
  const userName = readlineSync.question(questionAskingName);
  console.log(`${greeting}, ${userName}`);
  return userName;
};

export default getUserName;
