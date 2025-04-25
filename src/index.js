import readlineSync from 'readline-sync';
import greetingUser from './cli.js';

// eslint-disable-next-line max-len
export const getRandomNumber = (max = 100, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomMathOperator = () => {
  const arrayOfOperators = ['+', '-', '*'];
  return arrayOfOperators[getRandomNumber(arrayOfOperators.length - 1)];
};

export const isEvenNumber = (num) => num % 2 === 0;

export const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (!(num % i) && num !== i) {
      return false;
    }
  }
  return true;
};

export const normalizeUserAnswer = (userAnswer) => userAnswer.trim().toLowerCase();

export const communicationWithUser = (rule, prepareQuestionAndAnswer) => {
  const userName = greetingUser();
  console.log(rule);

  const amountOfCorrectAnswers = 3;
  let countCorrectAnswers = 0;

  while (countCorrectAnswers < amountOfCorrectAnswers) {
    const [questionParams, correctAnswer] = prepareQuestionAndAnswer();
    console.log(`Question: ${questionParams.join(' ')}`);

    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = normalizeUserAnswer(userAnswer);
    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
