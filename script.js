function getComputerChoice(){

    const MIN = 1;
    const MAX = 3;
    let num = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    if(num === 1){
        return "rock"
    }
    else if(num === 2){
        return "paper"
    }
    else if(num === 3){
        return "scissors"
    }
    
}

function getPlayerChoice(){
    while(1){
        let choice = prompt("Rock, Paper, or Scissors?")
        if(choice.toLowerCase() === "rock"){
            return "rock"
        }
        else if(choice.toLowerCase() === "paper"){
            return "paper"
        }
        else if(choice.toLowerCase() === "scissors"){
            return "scissors"
        }
        else{
            console.log("Error. Incorrect input.")
        }
    }
}

function playRound(pc, cc){
    const gameData = {
        'rock': {'win': 'scissors', 'lose': 'paper'},
        'paper': {'win': 'rock', 'lose': 'scissors'},
        'scissors': {'win': 'paper', 'lose': 'rock'}
    }

    if(gameData[pc].win === cc){
        return "player"
    }
    else if(gameData[pc].lose === cc){
        return "computer"
    }
    else{
        return "tie"
    }
}

function game(){
    const runningScore = { 
        player : 0,
        computer : 0
    }

    for(let i = 1; i < 6; i++){
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice(); 
        
        const result = playRound(playerChoice, computerChoice);

        if(result === 'tie'){
            console.log("This round is a TIE!")
        }
        else{
            runningScore[result]++;
            console.log(`${result.toUpperCase()} wins this round!`)
        }
    }
    if(runningScore.player > runningScore.computer){
        console.log(`PLAYER wins with a score of ${runningScore.player}!`);
    }
    else if(runningScore.player < runningScore.computer){
        console.log(`COMPUTER wins with a score of ${runningScore.computer}!`);
    }
    else{
        console.log(`The game is a TIE. Both sides scoring a ${runningScore.player, runningScore.computer}!`)
    }
}


game();