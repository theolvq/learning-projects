let pScore = 0;
let cScore = 0;
let winner = "";
let roundResult = "";

let computerSelection;
let playerSelection;
let displayResult = document.querySelector('#result');
let displayPlayerScore = document.querySelector('#pScore')
let displayComputerScore = document.querySelector('#cScore')
let displayWinner = document.querySelector('#winner')

function playRound() {
  if (
    playerSelection === "rock" &&
    computerSelection === "paper"
  ) {
    roundResult = "You Lose! Paper beats Rock.";
    cScore++;
  } else if (
    playerSelection === "paper" &&
    computerSelection === "rock"
  ) {
    roundResult = "You Win! Paper beats Rock.";
    pScore++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "rock"
  ) {
    roundResult = "You Lose! Rock beats Scissors.";
    cScore++;
  } else if (
    playerSelection === "rock" &&
    computerSelection === "scissors"
  ) {
    roundResult = "You Win! Rock beats Scissors.";
    pScore++;
  } else if (
    playerSelection === "paper" &&
    computerSelection === "scissors"
  ) {
    roundResult = "You Lose! Scissors beat Paper.";
    cScore++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "paper"
  ) {
    roundResult = "You Win! Scissors beat Paper";
    pScore++;
  } else if (playerSelection === computerSelection) {
    roundResult = "Draw! You chose the same!";
  }
  if(pScore >= 5 || cScore >= 5){
    return
  }
}


function scoreTab(){
  if(pScore >= 5 || cScore >= 5){
    if (pScore < cScore) {
    winner = "You Lose!";
  } else if (pScore > cScore) {
    winner = "You Win!";
  } else if (pScore === cScore) {
    winner = "Draw";
  }
  }
    
  displayWinner.textContent = winner    
  displayResult.textContent = roundResult
  displayPlayerScore.textContent = `Player Score: ${pScore}`
  displayComputerScore.innerText = `Computer Score: ${cScore}`
}


  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      function playerChoice(){
         playerSelection = button.id
      };
      function computerPlay() {
        let rps = ["rock", "paper", "scissors"];
        let random = Math.floor(Math.random() * rps.length);
        computerSelection = rps[random];
      }
      playerChoice()
      computerPlay();
      playRound();
      scoreTab()
    })
  })