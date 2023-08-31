/*
1: create getcomputerchoice() function.
    - create an array of choices
2: create playerchoice() function.
    - create prompt to take user input.
3: create playgame() function with player selection and computer selection parameters.
    -use conditional statement to compare player and computer choices and give a result.

*/
function getComputerChoice(){
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    let number = Math.floor(Math.random() * 3);
    return choice[number];
}
function getPlayerChoice(){
    let playerChoices = prompt("Choose your move!\n(rock, paper, scissors).");
    let playerChoice = playerChoices;
    if (playerChoices === null){
        return playerChoices;
    }
    else{
        return playerChoice.toUpperCase();
    }
    
}
function playGame(computerChoice, playerChoice){
    if (playerChoice === null){
        alert("Thanks for playing!");
        console.log("Game Over!");
    }

    else if (computerChoice === 'ROCK' && playerChoice === 'ROCK'){
        alert("It's a tie!");
        console.log("You both chose rock. It's a tie!")
    }
    
    else if (computerChoice === 'PAPER' && playerChoice === 'PAPER'){
        alert("It's a tie!");
        console.log("You both chose paper. It's a tie!")
    }

    else if (computerChoice === 'SCISSORS' && playerChoice === 'SCISSORS'){
        alert("It's a tie!");
        console.log("You both chose scissors. It's a tie!")
    }

    else if (computerChoice === 'PAPER' && playerChoice === 'SCISSORS'){
        alert("You Win!");
        console.log("Computer chose paper. You win!")
    }

    else if (computerChoice === 'PAPER' && playerChoice === 'ROCK'){
        alert("You lost to a machine. Be ashamed!");
        console.log("Computer chose paper. You lose!")
    }

    else if (computerChoice === 'SCISSORS' && playerChoice === 'PAPER'){
        alert("You lost to a machine. Be ashamed!");
        console.log("Computer chose scissors. You lose!")
    }

    else if (computerChoice === 'SCISSORS' && playerChoice === 'ROCK'){
        alert("You Win!");
        console.log("Computer chose scissors. You win!")
    }

    else if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS'){
        alert("You lost to a machine. Be ashamed!");
        console.log("Computer chose rock. You lose!")
    }

    else if (computerChoice === 'ROCK' && playerChoice === 'PAPER'){
        alert("You Win!");
        console.log("Computer chose rock. You win!")
    }

    else{
        alert("Invalid Choice, play again!")
        playGame(getComputerChoice(), getPlayerChoice());
    }

    
}

function game(){
    console.log("ROUND ONE")
    playGame(getComputerChoice(), getPlayerChoice());    

    console.log("ROUND TWO")
    playGame(getComputerChoice(), getPlayerChoice());

    console.log("ROUND THREE")
    playGame(getComputerChoice(), getPlayerChoice());

    console.log("ROUND FOUR")
    playGame(getComputerChoice(), getPlayerChoice());

    console.log("ROUND FIVE")
    playGame(getComputerChoice(), getPlayerChoice());
}
game();