import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

// eslint-disable-next-line import/prefer-default-export
export { getUserName };
