#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetingUser from '../src/cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 101);

const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const normalizeUserAnswer = (userAnswer) => userAnswer.trim().toLowerCase();

const communicationWithUser = () => {
  const userName = greetingUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const amountOfCorrectAnswers = 3;
  let countCorrectAnswers = 0;

  while (countCorrectAnswers < amountOfCorrectAnswers) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = normalizeUserAnswer(userAnswer);
    const correctAnswer = getCorrectAnswer(randomNumber);
    if (correctAnswer === userAnswer) {
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

communicationWithUser();
