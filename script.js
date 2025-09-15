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

function playRound(computerChoice, humanChoice) {
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

  // if (humanChoice === "rock") {
  //   if (computerChoice === "scissors") {
  //     humanScore++;
  //     console.log("You won!");
  //   } else if (computerChoice === "paper") {
  //     computerScore++;
  //     console.log("You, lose!");
  //   }
  // } else if (humanChoice === "paper") {
  //   if (computerChoice === "scissors") {
  //     computerScore++;
  //     console.log("You, lose!");
  //   } else if (computerChoice === "rock") {
  //     humanScore++;
  //     console.log("You won!");
  //   }
  // } else if (humanChoice === "scissors") {
  //   if (computerChoice === "paper") {
  //     humanScore++;
  //     console.log("You won!");
  //   } else if (computerChoice === "rock") {
  //     computerScore++;
  //     console.log("You, lose!");
  //   }
  // }

  console.log("humanScore:", humanScore);
  console.log("computerScore: ", computerScore);
}

function playGame(rounds = 1) {
  for (let i = 1; i <= rounds; i++) {
    playRound(getComputerChoice(), getHumanChoice());
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

playGame(5);
