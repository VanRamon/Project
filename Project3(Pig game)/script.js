'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');



let totalScores, currentScore, activPlayer, isPlaying;

const initGame = function(){
    diceElement.classList.add('hidden');
     totalScores = [0, 0];
     currentScore = 0;
     activPlayer = 0;
     isPlaying = true;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.remove('player--active');
    player1Element.classList.remove('player--active');
    player0Element.classList.add('player--active');
};
initGame();

const swichActivPlayer = function() {
    currentScore = 0;
        document.getElementById(`current--${activPlayer}`).textContent = currentScore;
        activPlayer = activPlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
};

 
btnRoll.addEventListener('click', function(){
    
    if (isPlaying){

    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current--${activPlayer}`).textContent = currentScore;

    } else{
        swichActivPlayer()
    }}
});

btnHold.addEventListener('click', function(){

    if (isPlaying) {

    totalScores[activPlayer] += currentScore;
    document.getElementById(`score--${activPlayer}`).textContent = totalScores[activPlayer];

    if (totalScores[activPlayer] >= 100){
        isPlaying = false;

        document.querySelector(`.player--${activPlayer}`).classList.add('player--winner');

        document.querySelector(`.player--${activPlayer}`).classList.remove('player--active');
    }else {
        swichActivPlayer();
    }}

});

btnNew.addEventListener('click', initGame);