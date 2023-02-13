function game(){
    const runningScore = { 
        player : 0,
        computer : 0
    }
    let gameOver = false;

    const display = document.querySelector('#valueDisplay');
    display.textContent = 'WELCOME!';

    const buttonNodeList = document.querySelectorAll('.button');
    buttonNodeList.forEach(btn => {
        btn.addEventListener('click', function(e){
            
            let pc = e.target.getAttribute('id');
            let cc = getComputerChoice();
            console.log(`player: ${pc} - computer: ${cc}`)
            if(!gameOver){
                switch(playRound(pc, cc)){
                    case 'player':
                        runningScore.player++;
                        display.textContent = `Player wins with ${pc}!`;
                        break;
                    case 'computer':
                        runningScore.computer++;
                        display.textContent = `Computer wins with ${cc}!`;
                        break;
                    case 'tie':
                        display.textContent = 'Tie!';
                        break;
                }
                const scoreDisplay = document.querySelector('#scoreDisplay');
                scoreDisplay.textContent = `Player: ${runningScore.player} - Computer: ${runningScore.computer}`
            }
            if(runningScore.player >= 5 || runningScore.computer >= 5){
                gameOver = true;
                display.textContent = `${runningScore.player > runningScore.computer? 
                                        'PLAYER': 'COMPUTER'} Wins!`
            }
        })
    })
}

function playRound(pc, cc){
    const gameData = {
        'rock': {'win': 'scissors', 'lose': 'paper'},
        'paper': {'win': 'rock', 'lose': 'scissors'},
        'scissors': {'win': 'paper', 'lose': 'rock'}
    }
    if(gameData[pc].win === cc){return "player"}
    else if(gameData[pc].lose === cc){return "computer"}
    else{return "tie"}
}

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

game();