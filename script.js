let plrWins = 0;
let cmpWins = 0;



function getPlayerChoice(){
    let Choice = "RPS"
    let plrChoice = Choice[Number(prompt("Choose 0 for rock 1 for paper and 2 for scissors."))];
    return plrChoice;
}

function getCPUChoice(){
    let ComputerChoice = "RPS"
    return ComputerChoice[Math.floor(Math.random()* 3)]; 
}

function chooseRoundWinner(player, computer){
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

function decideTheGame(){
    chooseRoundWinner(getPlayerChoice(), getCPUChoice());
    console.log(`Player wins are ${plrWins} Computer wins are ${cmpWins}` );    
    }

let i = 0;
while (i < 5){
decideTheGame();
i++;
    }
    if (plrWins > cmpWins){
        console.log("You win!!!");
    }
    else{
        console.log("The CPU Won!");
}