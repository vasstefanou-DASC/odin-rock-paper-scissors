console.log("Hello World");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    let computerChoice = "Something went wrong!"
    switch(randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "paper";
    }
    return computerChoice;
}

console.log(getComputerChoice());