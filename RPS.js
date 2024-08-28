New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
let userScore = 0;
let compScore = 0;

const compChoices = document.querySelector(".compChoices");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGAme = () => {
  console.log("game was draw");
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("you won !");
    msg.innerText = `You Win!,over computer's ${compChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("you lose");
    msg.innerText = `You Lose over computer's ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //   console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  //   console.log("comp choice =", compChoice);
  console.log(userChoice);
  console.log(compChoice);

  if (userChoice === compChoice) {
    drawGAme();
  } else {
    let userWin = false;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
