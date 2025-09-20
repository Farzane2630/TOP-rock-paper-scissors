function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";

    case 1:
      return "paper";
    case 2:
      return "scissors";

    default:
      break;
  }
}

function getHumanChoice() {
  return prompt("Write your choice:").toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  const computerChoice = getComputerChoice()
  const humanChoice= getHumanChoice()
  if (humanChoice === computerChoice) {
    console.log("Both picked same choice, please try again!");
  }

  // Humanlose scenario
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(
      `You, lose! ${computerChoice} beat ${humanChoice} | your score=${humanScore} / system score=${computerScore}`
    );
  }

  // Humanwin scenario
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `You won! ${humanChoice} beat ${computerChoice} | your score=${humanScore} / system score=${computerScore}`
    );
  }

  console.log("humanScore:", humanScore);
  console.log("computerScore: ", computerScore);
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }

  if (humanScore === 5) {
    alert(
      `cangrats, you won! your score=${humanScore} | system score=${computerScore}`
    );
  } else if (computerScore === 5) {
    alert(
      `System won!system score=${computerScore} | your score=${humanScore}`
    );
  } else {
    alert(`Both won! score=${humanScore}`);
  }
}

playGame();
