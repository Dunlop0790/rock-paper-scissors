let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
  let choice;
  if (randomComputerChoice === 1) {
    choice = "Rock";
  } else if (randomComputerChoice === 2) {
    choice = "Paper";
  } else if (randomComputerChoice === 3) {
    choice = "Scissors";
  }
  return choice;
}

function getHumanChoice() {
  document.getElementById('rock').addEventListener('click', () => {
    const choice = 'Rock';
    playRound(choice);
  });
  document.getElementById('paper').addEventListener('click', () => {
    const choice = 'Paper';
    playRound(choice);
  });
  document.getElementById('scissors').addEventListener('click', () => {
    const choice = 'Scissors';
    playRound(choice);
  });

}

function playRound (humanChoice) {

  if (humanScore >= 6 || computerScore >= 6) return;

  const computerChoice = getComputerChoice();
  let resultMessage;
  let scoreMessage = `Human score: ${humanScore} - Computer score: ${computerScore}`;
  if (humanChoice === computerChoice) {
      resultMessage = "It's a tie!";
  } else if (
      (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
      (humanChoice === 'Paper' && computerChoice === 'Rock') ||
      (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
      resultMessage = "One point for human! " + humanChoice + " beats " + computerChoice;
      humanScore++;
  } else {
      resultMessage = "One point for computer! " + computerChoice + " beats " + humanChoice;
      computerScore++;
  }
  
  document.getElementById('choice').innerText = `Human chose: ${humanChoice}`;
  document.getElementById('result').innerText = resultMessage;
  document.getElementById('scoreboard').innerText = scoreMessage;

  if (humanScore === 6) {
    document.getElementById('scoreboard').innerText += "\nHuman wins the game!";
  } else if (computerScore === 6) {
    document.getElementById('scoreboard').innerText += "\nComputer wins the game!";
  }

}

getHumanChoice();

//Alt code for score keeping:
// let message = (computerChoice > humanChoice) ? `${computerScore + 1}:${humanScore}` :
//   (computerChoice < humanChoice) ? `${computerScore}:${humanScore + 1}` :
//   (computerChoice === humanChoice) ? `${computerScore}:${humanScore}`: `Tie`;

// console.log(message);
