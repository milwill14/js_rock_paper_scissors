console.log("hit")

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

getComputerChoice();

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper"))
    {
        return "Player";
        }
    else {
        return "Computer";
    } 
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "tie") {
        return "You tied!"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Choose rock, paper, or scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection == "Player")) {
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection == "Computer")) {
            scoreComputer++;
        }
     }
     console.log("Game Over")
     if(scorePlayer > scoreComputer) {
        console.log("You won the game");
     }
     else if(scoreComputer > scorePlayer) {
        console.log("Computer won the game");
     }
     else {
        console.log("It's a tie game.")
     }
}

game();