let cards = document.querySelectorAll(".card");
let humanChoice = "";
let playerScore = 0;
let computerScore = 0;
let player = document.querySelector(".player-score");
let computer = document.querySelector(".computer-score");
let result = document.querySelector(".ui");
let choice = ["rock", "paper", "scissors"];
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = choice[random];
    if (index === 0) {
      humanChoice = "rock";
    } else if (index === 1) {
      humanChoice = "paper";
    } else if (index === 2) {
      humanChoice = "scissors";
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
      playerScore++;
      player.innerText = playerScore;
      result.innerText = `${humanChoice} beats ${computerChoice}`;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
      playerScore++;
      player.innerText = playerScore;
      result.innerText = `${humanChoice} beats ${computerChoice}`;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
      playerScore++;
      player.innerText = playerScore;
      result.innerText = `${humanChoice} beats ${computerChoice}`;
    }
    if (humanChoice === "rock" && computerChoice === "rock") {
      result.innerText = `It's a draw!`;
    }
    if (humanChoice === "paper" && computerChoice === "paper") {
      result.innerText = `It's a draw!`;
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
      result.innerText = `It's a draw!`;
    }
    if (computerChoice === "rock" && humanChoice === "scissors") {
      computerScore++;
      computer.innerText = computerScore;
      result.innerText = `${humanChoice} loses to ${computerChoice}`;
    }
    if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore++;
      computer.innerText = computerScore;
      result.innerText = `${humanChoice} loses to ${computerChoice}`;
    }
    if (computerChoice === "scissors" && humanChoice === "paper") {
      computerScore++;
      computer.innerText = computerScore;
      result.innerText = `${humanChoice} loses to ${computerChoice}`;
    }
  });
});
