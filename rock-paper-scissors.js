const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log("Error message please try again");
    }
};
//code works

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }

}

//code works again

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") || (userChoice === 'bomb')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// code works

function playGame(choice) {
    let userChoice = getUserChoice(choice);
    console.log(`You picked ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`The computer picked ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}


playGame('BOMB');