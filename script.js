'use strict';

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let scores, currentScore, activePlayer, playing;

const game = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
};
game();
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  };

  btnRoll.addEventListener("click", function () {
    if (playing) {
      
      const dice = Math.trunc(Math.random() * 6) + 1;
      
      diceEl.classList.remove("hidden");
      diceEl.src = `image/dice-${dice}.png`;
  
      
      if (dice !== 1) {
        
  
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        switchPlayer();
      }
    }
  });

  btnHold.addEventListener("click", function () {
    if (playing) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      if (scores[activePlayer] >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--active");
        document.getElementById(`name--${activePlayer}`).textContent = `Player ${
          activePlayer + 1
        } Wins!`;
        const winSound = document.getElementById('winSound');
        winSound.play();
        confetti({
          particleCount: 200,
          spread: 90,
          origin: { y: 0.7 },
          colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd'],
          shapes: ['circle', 'square'],
          scalar: 1.2
        });
      } else {
        switchPlayer();
      }
    }
  });
  
  btnNew.addEventListener("click", game);
  btnNew.addEventListener("click", () =>{
    winSound.pause();
  });
  

  const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");
console.log(btnOpen);

for (let i = 0; i < btnOpen.length; i++)
	btnOpen[i].addEventListener("click", function () {
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");
	});

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

  
  
  