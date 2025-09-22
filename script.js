const btns = document.querySelectorAll(".choice");
const score = document.querySelector("#score");
const humanChoiceBtn = document.querySelector(".human-choice");
const computerChoiceBtn = document.querySelector(".computer-choice");
const gameBoardContainer = document.querySelector(".game-board-section");
const resultContainer = document.querySelector(".result-section");
const resultState = document.querySelector(".result-state");
const playAgainBtn = document.querySelector(".play-again-btn");
const choices = [
  { title: "Paper", src: "/images/icon-paper.svg" },
  { title: "Scissors", src: "/images/icon-scissors.svg" },
  { title: "Rock", src: "/images/icon-rock.svg" },
];

let humanChoice = "";
let computerChoice = "";

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNum].title;

  updateUI(computerChoiceBtn, randomNum, resultContainer);
}

const getHumanChoice = (index) => {
  humanChoice = choices[index].title;
  updateUI(humanChoiceBtn, index, gameBoardContainer);
  playRound();
};

Array.from(btns).forEach((btn, index) => {
  btn.addEventListener("click", () => {
    getComputerChoice();
    getHumanChoice(index);
    // playGame();
  });
});

let humanScore = 0;
let computerScore = 0;

const updateUI = (node, index, section) => {
  node.innerHTML = `<button type="button" class="choice ${choices[
    index
  ].title.toLocaleLowerCase()}">
              <img src=${choices[index].src} alt=${choices[index].title}>
          </button>`;

  section.classList.toggle("hide");
};

function playRound() {
  if (humanChoice === computerChoice) {
    resultState.textContent = "Same choices! play again";
  }

  // Humanlose scenario
  if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    resultState.textContent = " You lose";
  }

  // Humanwin scenario
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    resultState.textContent = " You Win";
  }

  score.textContent = humanScore;
}

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  score.textContent = 0;
};

playAgainBtn.addEventListener("click", () => {
  resultContainer.classList.add("hide");
  gameBoardContainer.classList.remove("hide");

  /* 
  When one of players reaches 3 scores:
  the winner is picked and scores are reset
  */
  if (Number(score.textContent) === 3) {
    alert(
      `cangrats, you won! your score=${humanScore} | system score=${computerScore}`
    );
    resetGame();
  } else if (computerScore === 3) {
    alert(
      `System won!system score=${computerScore} | your score=${humanScore}`
    );
    resetGame();
  }
});
