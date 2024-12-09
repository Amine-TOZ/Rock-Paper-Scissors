function getComputerChoice(){
let randomNum = (Math.trunc(Math.random()*3))+1;

if (randomNum == 1 ) {
    return "rock" ;

} else if (randomNum == 2) {
    return "paper" ;

} else {return "scissors" ;}
}    


let btnClicked = "";

function handleClick(event){
    btnClicked = event.target.textContent;
    const humanSelection = btnClicked;
    const computerSelection = getComputerChoice();   
    
     playRound(humanSelection,computerSelection);
     if (humanScore === 5) {
        let display = document.getElementById("display");
            display.textContent = "Congratulation! You won the game.";
            document.removeEventListener("click", handleClick);

       } else if (computerScore === 5 ) {
        let display = document.getElementById("display");
            display.textContent = "Game over.How can you lose to a computer?";
            document.removeEventListener("click", handleClick);}
}

document.addEventListener("click", handleClick);



    let computerScore = 0;
    let humanScore = 0;
    function playRound(humanChoice,computerChoice) {
        
        let humanScoreDiv = document.getElementById("humanScore")
        let computerScoreDiv = document.getElementById("computerScore")
        let display = document.getElementById("display");
        if (humanChoice == computerChoice){
            humanScoreDiv.textContent = `Your Score: ${humanScore}`
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`
            return display.textContent = "Its a draw!!";

        }else {
            switch(true) {
                case (humanChoice === "rock" && computerChoice ==="scissors"):
                     ++humanScore;
                     humanScoreDiv.textContent = `Your Score: ${humanScore}`
                     computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                     return display.textContent =
                        "Rock smashes scissors you won!!";


                case (humanChoice === "rock" && computerChoice === "paper"):
                     ++computerScore;
                     humanScoreDiv.textContent = `Your Score: ${humanScore}`
                     computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                     return display.textContent =
                       "Rock loses to paper you lost";


                case (humanChoice === "paper" && computerChoice === "rock"):
                     ++humanScore;
                     humanScoreDiv.textContent = `Your Score: ${humanScore}`
                     computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                     return display.textContent =
                       "Paper beats rock you won!!";


                case (humanChoice === "paper" && computerChoice === "scissors"):
                     ++computerScore;
                     humanScoreDiv.textContent = `Your Score: ${humanScore}`
                     computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                     return display.textContent =
                       "Paper loses to rock you lost";


                case (humanChoice === "scissors" && computerChoice === "rock"):
                     ++computerScore;
                     humanScoreDiv.textContent = `Your Score: ${humanScore}`
                     computerScoreDiv.textContent = `Computer Score:${computerScore}`
                     return display.textContent =
                       "scissors loses to rock you lost";


                case (humanChoice === "scissors" && computerChoice === "paper"):
                     ++humanScore;
                     humanScoreDiv.textContent = `Your Score:${humanScore}`
                     computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                     return display.textContent =
                       "scissors cuts paper you won!! ";
                
            }        
        }
    
}







