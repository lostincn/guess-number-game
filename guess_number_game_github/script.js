'use strict';

let message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 50;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🚫 Не жми просто так');
  } else if (guess === secretNumber) {
    displayMessage('🎊 Отлично! Тебе удалось!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber)
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⏬ Ниже...' : '⏫ Выше...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🧨 Ты проиграл!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#541e1b';
    }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 50;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Хочешь снова значит...');
});
