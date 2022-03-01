

function getPlayerChoice(){
    let playerChoice = prompt("Choose R for rock P for paper or S for scissors.").toLocaleUpperCase();
    if (playerChoice.length > 1){
        alert("Too many Characters detected please enter only one letter");
        let playerChoice = prompt("Choose R for rock P for paper or S for scissors.").toLocaleUpperCase();
    }
    else{
        return playerChoice;
    }
    
}

function getCPUChoice(){
    let ComputerChoice = "RPS"
    return ComputerChoice[Math.floor(Math.random()* 3)]; 
}




console.log(getCPUChoice());

