// A function which selects a random choice for the computer player
function computerPlay(){
  let options = ['paper', 'rock', 'scissors'];
  let computerSelection = options[Math.floor((Math.random() * 3))];
  return computerSelection;
}

function playerPlay() {
  let playerSelection = prompt("Rock, Paper or scissors?");
  // TODO : Verify valid choice
  return playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let roundResult;
  /* in case of a tie */
  if (playerSelection == computerSelection) {
    roundResult = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " and " + computerSelection + ". It's a tie!";
  }
  /* rock possibilities */
  else if(playerSelection == 'rock') {
    if (computerSelection == 'paper') {
       roundResult = "You Lose! Paper beats rock.";
       computerScore++;
    }
    else {
      roundResult = "You Win! Rock beats scissors.";
      playerScore++;
    }
  }
  /* paper possibilities */
  else if(playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
       roundResult = "You Lose! Scissors beat paper.";
       computerScore++;
    }
    else {
      roundResult = "You Win! Paper beats rock.";
      playerScore++;
    }
  }
  /* scissors possibilities */
  else if(playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
       roundResult = "You Lose! Rock beats scissors.";
       computerScore++;
    }
    else {
      roundResult = "You Win! Scissors beat paper.";
      playerScore++;
    }
  }
  return roundResult;
}

function game(){

  while(playerScore < 5 && computerScore < 5) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("You: " + playerScore + " | Robot: " + computerScore);
  }

  if(playerScore == 5) {
    console.log("You Win!");
  }
  else {
    console.log("You Lose!");
  }
}

// start the game
let playerScore = 0;
let computerScore = 0;
game();
