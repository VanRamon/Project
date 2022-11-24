'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function(){
    const gussingNumber = Number(document.querySelector('.number-input').value);

    if (!gussingNumber) {
      document.querySelector('.guess-message').textContent = 'Ввидите число!'; 

    } else if (gussingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правельно!';
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
        document.querySelector('.question').textContent = secretNumber;

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (gussingNumber !== secretNumber) {
            if (score > 1) {
            document.querySelector('.guess-message').textContent = 
            gussingNumber > secretNumber ? 'Слишком много!': 'Слишком мало!';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
            document.querySelector('.guess-message').textContent = 'Игра окончена!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.guess-message').textContent = 'Начни угадывать!';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-input').value = '';
});
