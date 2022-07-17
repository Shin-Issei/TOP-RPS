const plrChoiceRock = document.getElementById("rock");
const plrChoicePaper = document.getElementById("paper");
const plrChoiceScissors = document.getElementById("scissors");


const div = document.getElementById("playerChoiceReturn");
const playerScore = document.getElementById("playerScore");
const CPUScore = document.getElementById("CPUScore");

let plrWins = 0; // Will display to the player score/ cpu score divs as the game progresses.
let cmpWins = 0;

function updateScore(plrWins, cmpWins) {
  playerScore.textContent = `Your score is: ${plrWins}`;
  CPUScore.textContent = `Computer score is: ${cmpWins}`;
}


plrChoiceRock.addEventListener("click", function () {
  chooseRoundWinner("R", getCPUChoice());
  updateScore(plrWins, cmpWins);
});
plrChoicePaper.addEventListener("click", function () {
  chooseRoundWinner("P", getCPUChoice());
  updateScore(plrWins, cmpWins);
});
plrChoiceScissors.addEventListener("click", function () {
  chooseRoundWinner("S", getCPUChoice());
  updateScore(plrWins, cmpWins);
});

function getCPUChoice() {
  let ComputerChoice = "RPS";
  return ComputerChoice[Math.floor(Math.random() * 3)];
}

function chooseRoundWinner(player, computer) {
  // console.log(player);
  // console.log(computer);

  if (player === computer) {
    div.textContent = "Tied Round";
    plrWins++;
    cmpWins++;
  }
  //all computer win situations
  if (
    (computer == "P" && player == "R") ||
    (computer == "S" && player == "P") ||
    (computer == "R" && player == "S")
  ) {
    div.textContent = "CPU wins the round!";
    cmpWins++;
  } else {
    div.textContent = "You win the round!";
    plrWins++;
  }
}

function resetGame() {
  plrWins = 0;
  cmpWins = 0;
  updateScore(plrWins, cmpWins);
}

/* let i = 0;
while (i < 5){
decideTheGame();
i++;
    }
    if (plrWins > cmpWins){
        console.log("You win!!!");
    }
    else{
        console.log("The CPU Won!");
} */
