// function capitalize(str) {
//   return str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;
// }

// function getComputerChoice() {
//     let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
//     let choice; // Declare choice variable here
//     if (randomComputerChoice === 1) {
//       choice = "Rock";
//     } else if (randomComputerChoice === 2) {
//       choice = "Paper";
//     } else if (randomComputerChoice === 3) {
//       choice = "Scissors";
//     }
//     console.log("Computer chose: " + choice); // Print the choice after it's determined
//     return choice;
//   }
  
//   function getHumanChoice() {
//     let choice = prompt("Rock, Paper, or Scissors?");
//     console.log("Human chose: " + choice); // Display the choice in the console
//     return choice;
//   }
  
//   // Call both functions and log the results
//   let computerChoice = getComputerChoice();
//   let humanChoice = getHumanChoice();

const rockBeatsScissors = ("Rock" > "Scissors");
const scissorsBeatsPaper = ("Scissors" > "Paper");
const paperBeatsRock = ("Paper" > "Rock");

function capitalize(str) {
  return str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;
}

function getComputerChoice() {
  let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
  let choice; // Declare choice variable here
  if (randomComputerChoice === 1) {
    choice = "Rock";
  } else if (randomComputerChoice === 2) {
    choice = "Paper";
  } else if (randomComputerChoice === 3) {
    choice = "Scissors";
  }
  console.log("Computer chose: " + choice); // Print the choice after it's determined
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  choice = capitalize(choice); // Capitalize the user input
  console.log("Human chose: " + choice); // Display the choice in the console
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("It's a tie!");
  } else if (humanChoice > computerChoice) {
    console.log("One point for human! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else if (humanChoice < computerChoice) {
    console.log("One point for computer! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);

// let message = (computerChoice > humanChoice) ? `${computerScore + 1}:${humanScore}` :
//   (computerChoice < humanChoice) ? `${computerScore}:${humanScore + 1}` :
//   (computerChoice === humanChoice) ? `${computerScore}:${humanScore}`: `Tie`;

// console.log(message);
