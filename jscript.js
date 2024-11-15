let randomNum = (Math.trunc(Math.random()*3))+1;
let computerChoice;
//  console.log(randomNum)

function getComputerChoice(){

if (randomNum == 1 ) {
    return computerChoice = "rock" ;

} else if (randomNum == 2) {
    return computerChoice = "paper" ;

} else {return computerChoice = "scissors" ;}

}    

function getHumanChoice() {
    let humainChoice  ;
    let humainChoiceNum ;
    humainChoiceNum = prompt(
`1.rock
2.paper
3.scissors`,"")
if (humainChoiceNum == 1) {
    return  humainChoice = "rock";

} else if (humainChoiceNum == 2) {
    return humainChoice = "paper";

} else if (humainChoiceNum == 3) {
    return humainChoice = "scissors";

} else {return alert("Choose a number corresponding to your choice.")};
}
