const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice

}
// console.log(computerSelection);

function playRound(playerSelection, computerSelection ) {
    computerSelection = getComputerChoice().toLocaleLowerCase();
    playerSelection = playerSelection.toLocaleLowerCase();

    if(computerSelection == playerSelection){
        return "You tied";
    } else if (computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper") {
        return `You lose ${computerSelection} beats ${playerSelection}`;
        
    }else {
        return `You win ${playerSelection} beats ${computerSelection}`;
    }

    
}

const buttons = document.querySelectorAll('button');
const results   = document.querySelector('#results');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        results.textContent = result;
    });
});

// const playerSelection = prompt();
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));



