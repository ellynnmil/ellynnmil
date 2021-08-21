
const myArray = [
       'Rock',
       'Paper',
       'Scissors'
   ];

 function computerPlay() {
      return myArray[~~(Math.random()*myArray.length)]
        }

let computerScore=0;
let playerScore =0;

function SingleRound (PlayerSelection, computerSelection){

  if ((PlayerSelection ==="R")||(PlayerSelection ==="r")){
    if (computerSelection==="Scissors"){
        playerScore++;
        return "You win ! Rock beats Scissors. Score : "+playerScore+ " to " + computerScore;  }
    else if (computerSelection==="Paper"){
        computerScore++;
        return "You Lose! Paper beats Rock. Score : "+playerScore+ " to " + computerScore;}
    else { return "EQUALITY! Rock VS Rock. Score :  "+playerScore+ " to " + computerScore;}
   }

   if  ((PlayerSelection ==="S")||(PlayerSelection ==="s")){
     if (computerSelection==="Rock"){
         computerScore++;
         return "You Lose ! Rock beats Scissors. Score :  "+playerScore+ " to " + computerScore;}
     else if (computerSelection==="Paper"){
         return "You Win! Scissors beats Paper. Score : "+playerScore+ " to " + computerScore;
         playerScore++;}
     else { return "EQUALITY! Scissors VS Scissors. Score : "+playerScore+ " to " + computerScore;}
    }

    if  ((PlayerSelection ==="P")||(PlayerSelection ==="p")){
      if (computerSelection==="Rock"){
          playerScore++;
          return "You Win! Paper beats Rock. Score : "+playerScore+ " to " + computerScore;  }
      else if (computerSelection==="Scissors"){
          computerScore++;
          return "You Lose! Scissors beats Paper. Score : "+playerScore+ " to " + computerScore;}
      else { return "EQUALITY! Paper VS Paper. Score : "+playerScore+ " to " + computerScore;}
     }
}

//let Player = (prompt("Please enter R, S or P: "));
let k= Player;

const PlayerSelection = k;
const computerSelection = computerPlay();
console.log(SingleRound (PlayerSelection, computerSelection));


function game(){

  for (let nb=0; nb<=5; nb++){
      SingleRound();}
    }

/*  console.log(FINAL());

function FINAL(){
  if (playerScore > computerScore){
    return "You're the grat Winner !" }
  else if (playerScore < computerScore){
    return "So bad...You lose, let's try again"}
  else {return "Perfect EQUALITY !! Wouah"}
}*/
