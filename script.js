const plrChoiceRock = document.getElementById("rock");
const plrChoicePaper = document.getElementById("paper");
const plrChoiceScissors = document.getElementById("scissors");
const div = document.getElementById("playerChoiceReturn");

let ButtonSelect = 5;
let plrWins = 0;
let cmpWins = 0;

function getPlayerChoice(x){
    let Choice = "RPS";
    div.textContent = Choice[x];
    return Choice[x]
}

plrChoiceRock.addEventListener("click", function (){chooseRoundWinner(getPlayerChoice(0), getCPUChoice())})
plrChoicePaper.addEventListener("click", function () {chooseRoundWinner(getPlayerChoice(1),getCPUChoice() )});
plrChoiceScissors.addEventListener("click",function () {chooseRoundWinner(getPlayerChoice(2), getCPUChoice())});



function getCPUChoice(){
    let ComputerChoice = "RPS"
    return ComputerChoice[Math.floor(Math.random()* 3)] 
}

//Change the source of player parameter when I choose round winner.
function chooseRoundWinner(player, computer){
    console.log(player);
    console.log(computer);
    
    if (player === computer){
        plrWins++;
        cmpWins++;
        return;
    }
    //all computer win situations
    if ((computer == "P" && player == "R") || (computer == "S" && player == "P") || (computer == "R" && player == "S")){
        cmpWins++;
        return;
    }
    else{
        plrWins++;
    }
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