let computerChoice;
let humanChoice;
//  console.log(randomNum)

function getComputerChoice(){
let randomNum = (Math.trunc(Math.random()*3))+1;

if (randomNum == 1 ) {
    return "rock" ;

} else if (randomNum == 2) {
    return "paper" ;

} else {return "scissors" ;}
}    

function getHumanChoice() {
    let promptInput ;
        promptInput = prompt(
       `rock,paper or scissors`)
        promptInput = promptInput.toLowerCase();
        if ( promptInput == "rock" ||
             promptInput == "paper" || 
             promptInput == "scissors" ){
                return promptInput;
             }else {alert("try again")}
        
}

function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    function playRound(humanChoice,computerChoice) {
        // console.log(`You chose :${humanChoice}`);
        // console.log(`Computer chose :${computerChoice}`);
        if (humanChoice == computerChoice){
            return console.log("Its a draw!!");
        }else {
            switch(true) {
                case (humanChoice == "rock" &&
                     computerChoice == "scissors"):
                     ++humanScore;
                     return console.log(
                        "Rock smashes scissors you won!!");break;


                case (humanChoice == "rock" &&
                    computerChoice == "paper"):
                    ++computerScore;
                    return console.log(
                       "Rock loses to paper you lost");break;


                case (humanChoice == "paper" &&
                    computerChoice == "rock"):
                    ++humanScore;
                    return console.log(
                       "Paper beats rock you won!!");break;


                case (humanChoice == "paper" &&
                    computerChoice == "scissors"):
                    ++computerScore;
                    return console.log(
                       "Paper loses to rock you lost");break;

                       
                case (humanChoice == "paper" &&
                    computerChoice == "scissors"):
                    ++computerScore;
                    return console.log(
                       "Paper loses to rock you lost");break; 

                case (humanChoice == "scissors" &&
                    computerChoice == "rock"):
                    ++computerScore;
                    return console.log(
                       "scissors loses to rock you lost");break;

                case (humanChoice == "scissors" &&
                    computerChoice == "paper"):
                    ++humanScore;
                    return console.log(
                       "scissors cuts paper you won!! ");break;
                
            }        
        }
}


for (let i = 1 ; i <= 5 ; i++) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection) 

}

if (humanScore > computerScore) {
 console.log("Congratulation! You won the game.")
} else if (humanScore < computerScore) {
 console.log("Game over.How can you lose to a computer?")
}else {console.log("Its a draw!!")}

}


playGame();




