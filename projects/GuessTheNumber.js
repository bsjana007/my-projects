//digitsl clock
// const clock = document.querySelector("#clock");

// setInterval(() => {
//   let date = new Date();
// console.log(date.toLocaleTimeString());
//   clock.innerText = date.toLocaleTimeString();
// }, 1000);

//guess the number
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultsPara");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please give a valid number");
  } else if (guess < 1) {
    alert("please enter a number which is greater than 1");
  } else if (guess > 100) {
    alert("please enter a number which is lss than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You Guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is TOOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${12 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h4>${msg}</h4>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${12 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
