let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const drawGame = () =>{
  msg.innerText = "Game is Drawn !Play Again!"
  msg.style.backgroundColor = "orange";
}


const showWinner = (userWin , userChoice , compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Your ${userChoice} beats Computer's ${compChoice}`;
    msg.style.backgroundColor = "green";
    
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}





const genCompChoice = () =>{
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}







const playGame = (userChoice) =>{
  console.log("User Choice = ", userChoice);
  // generate computer's choice
  const compChoice = genCompChoice();
  console.log("Computer's Choice = ", compChoice);






  if (userChoice === compChoice){
    // draw the game
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      // scissors, rock
      userWin = compChoice === "scissors" ? false : true;
    }
    else{
      //rock , paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice , compChoice);
  }

}



choices.forEach((choice) =>{
  choice.addEventListener("click", () =>{
    const userChoice = choice.querySelector("img").getAttribute("id");
   playGame(userChoice);
  })
})