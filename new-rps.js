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
    return {value: randomNumber,choice: computerChoice};
}

function getHumanChoice() {
    const humanChoice = prompt("What is your pick? (rock,scissors,paper)").toLowerCase();
    let humanValue = -1;
    if (humanChoice==="rock"){
        humanValue = 0;
    } else if (humanChoice==="scissors") {
        humanValue = 1;
    } else if (humanChoice==="paper") {
        humanValue = 2;
    }
    return {value: humanValue,choice: humanChoice};
}

let humanScore = 0;
let computerScore = 0;

function playRound (human,computer) {
    if (human.value-computer.value === -1 || human.value-computer.value === 2) {
        console.log("You win " + human.choice + " beats " + computer.choice);
        humanScore++;
    } else if (human.value-computer.value === -2 || human.value-computer.value === 1) {
        console.log("You lose " + human.choice + " loses to " + computer.choice)
        computerScore++;
    } else {
        console.log("It's a Draw");
    }
    humanResults.textContent= "Human Score: " + humanScore;
    computerResults.textContent = "Computer Score: " + computerScore;
}

function playGame(rounds) {
    let round = 1;
    while (round<=rounds) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        round++;
    }
    if (humanScore > computerScore) {
        console.log("You win");
    } else if (humanScore < computerScore) {
        console.log("You lose");
    } else {
        console.log("It's a Draw!")
    }
}

// playGame(5);

const ui = document.createElement("div");
ui.textContent = "Press the button according to your choice";

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
ui.appendChild(rock);
ui.appendChild(scissors);
ui.appendChild(paper);

document.body.appendChild(ui);

rock.addEventListener("click", (event) => { 
    playRound({value:0,choice:"rock"},getComputerChoice())
    checkWinner();
});
paper.addEventListener("click", (event) => {
    playRound({value:2,choice:"paper"},getComputerChoice())
    checkWinner();
});
scissors.addEventListener("click", (event) => {
    playRound({value:1,choice:"scissors"},getComputerChoice())
    checkWinner();
});

const resultsPanel = document.createElement("div");
const humanResults = document.createElement("p");
const computerResults = document.createElement("p");
const winnerResults = document.createElement("p");
resultsPanel.appendChild(humanResults);
resultsPanel.appendChild(computerResults);
resultsPanel.appendChild(winnerResults);
document.body.appendChild(resultsPanel);

function checkWinner () {
    if (humanScore === 5) {
        winnerResults.textContent = "You Win";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        winnerResults.textContent = "Computer Wins";
        humanScore = 0;
        computerScore = 0;
    } else {
        winnerResults.textContent = "No winner yet";
    }
}
