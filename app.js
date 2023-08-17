const options = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let roundCount = 0;


function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice

}

function playRound(playerSelection, computerSelection ) {
    computerSelection = getComputerChoice().toLocaleLowerCase();
    playerSelection = playerSelection.toLocaleLowerCase();

    if(computerSelection === playerSelection){
        return "You tied";
    } else if (computerSelection === "rock" && playerSelection === "scissors" ||
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return `You lose ${computerSelection} beats ${playerSelection}`;
        
    }else {
        playerScore++;
        return `You win ${playerSelection} beats ${computerSelection}`;
    }

    
}

function declareWinner() {
    let winner = "it's a tie";
    if(playerScore > computerScore){
        winner = "You win!";
    } else if (computerScore > playerScore){
        winner = "Computer wins!";
    }
    results.textContent = `${winner} Final Score: Player ${playerScore} - Computer ${computerScore}`;

    // reset the score for the next game
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
}

const buttons = document.querySelectorAll('button');
const results   = document.getElementById('results');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerSelection = button.id;
        const result = playRound(playerSelection);
        results.textContent = result;

        roundCount++;

        if(roundCount === 5){
            declareWinner();
        }

    });
});




