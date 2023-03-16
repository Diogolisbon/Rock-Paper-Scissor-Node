/*
function playGame() {
    const playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
    const computerSelection = computerPlay();
  
    console.log("You played: " + playerSelection);
    console.log("The computer played: " + computerSelection);
  
    if (playerSelection === computerSelection) {
      console.log("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }
  
  function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  playGame();
  */

  const readline = require('readline');

function playGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Choose rock, paper, or scissors: ", (playerSelection) => {
    const computerSelection = computerPlay();

    console.log("You played: " + playerSelection);
    console.log("The computer played: " + computerSelection);

    if (playerSelection === computerSelection) {
      console.log("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }

    rl.close();
  });
}

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

playGame();
