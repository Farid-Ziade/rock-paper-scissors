let cards = document.querySelectorAll(".card");
let humanChoice = "";
let playerScore = 0;
let computerScore = 0;
let p = document.querySelector(".player-score");
let c = document.querySelector(".computer-score");
console.log(p);
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
      p.innerText = playerScore;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
      playerScore++;
      p.innerText = playerScore;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
      playerScore++;
      p.innerText = playerScore;
    }
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("draw");
    }
    if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("draw");
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("draw");
    }
    if (computerChoice === "rock" && humanChoice === "scissors") {
      computerScore++;
      c.innerText = computerScore;
    }
    if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore++;
      c.innerText = computerScore;
    }
    if (computerChoice === "scissors" && humanChoice === "paper") {
      computerScore++;
      c.innerText = computerScore;
    }
    console.log("computer choice", computerChoice);
    console.log("humanChoice", humanChoice);
    console.log("p", playerScore, "c", computerScore);
  });
});
