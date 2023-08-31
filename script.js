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
    console.log(number)
    return choice[number];
}
function getPlayerChoice(){
    return playerChoice = prompt("Choose your move!\n(rock, paper, scissors).").toUpperCase()
}
function playGame(computerChoice, playerChoice){
    if (computerChoice === 'ROCK' && playerChoice === 'ROCK'){
        alert("It's a tie!");
    }
    
    else if (computerChoice === 'PAPER' && playerChoice === 'PAPER'){
        alert("It's a tie!");
    }

    else if (computerChoice === 'SCISSORS' && playerChoice === 'SCISSORS'){
        alert("It's a tie!");
    }

    else if (computerChoice === 'PAPER' && playerChoice === 'SCISSORS'){
        alert("You Win!");
    }

    else if (computerChoice === 'PAPER' && playerChoice === 'ROCK'){
        alert("You lost to a machine. Be ashamed!");
    }

    else if (computerChoice === 'SCISSORS' && playerChoice === 'PAPER'){
        alert("You lost to a machine. Be ashamed!");
    }

    else if (computerChoice === 'SCISSORS' && playerChoice === 'ROCK'){
        alert("You Win!");
    }

    else if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS'){
        alert("You lost to a machine. Be ashamed!");
    }

    else if (computerChoice === 'ROCK' && playerChoice === 'PAPER'){
        alert("You Win!");
    }

    else{
        alert("Invalid Choice, play again!")
        playGame(getComputerChoice(), getPlayerChoice());
    }
}
playGame(getComputerChoice(), getPlayerChoice());