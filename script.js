const btns = document.querySelectorAll(".choice");
const score = document.querySelector("#score");
const humanChoiceBtn = document.querySelector(".human-choice");
const computerChoiceBtn = document.querySelector(".computer-choice");
const resultContainer = document.querySelector(".result-section");
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

  updateUI(computerChoiceBtn, randomNum);
}

const getHumanChoice = (index) => {
  humanChoice = choices[index].title;
  updateUI(humanChoiceBtn, index);
  playRound();
};

Array.from(btns).forEach((btn, index) => {
  btn.addEventListener("click", () => {
    getComputerChoice();
    getHumanChoice(index);
    playGame();
  });
});

let humanScore = 0;
let computerScore = 0;

const updateUI = (node, index) => {
  node.innerHTML = `<button type="button">
              <img src=${choices[index].src} alt=${choices[index].title}>
          </button>`;
};

function playRound() {
  if (humanChoice === computerChoice) {
    console.log("Both picked same choice, please try again!");
  }

  // Humanlose scenario
  if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    console.log(
      `You, lose! ${computerChoice} beat ${humanChoice} | your score=${humanScore} / system score=${computerScore}`
    );
  }

  // Humanwin scenario
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log(
      `You won! ${humanChoice} beat ${computerChoice} | your score=${humanScore} / system score=${computerScore}`
    );
  }

  score.textContent = humanScore;
}

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  score.textContent = 0;
};

function playGame() {
  if (Number(score.textContent) === 3) {
    alert(
      `cangrats, you won! your score=${humanScore} | system score=${computerScore}`
    );
    resetScores();
  } else if (computerScore === 3) {
    alert(
      `System won!system score=${computerScore} | your score=${humanScore}`
    );
    resetScores();
  }
}
