var pScore = document.querySelector("#pScore");
var cScore = document.querySelector("#cScore");
var tieScore = document.querySelector("#tieScore");

var startBtn = document.querySelector("#start");
var rockBtn = document.querySelector("#rockBtn");
var paperBtn = document.querySelector("#paperBtn");
var scissorsBtn = document.querySelector("#scissorsBtn");

var messages1 = document.querySelector("#messages1");
var messages2 = document.querySelector("#messages2");
var result = document.querySelector("#result");

var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["Rock", "Paper", "Scissors"];


var playerChoice = "";
var computerChoice = "";

function setScore(){
    tieScore.textContent = ties;
    pScore.textContent = wins;
    cScore.textContent = losses;
}

function computerMove(){
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    messages2.textContent = "The computer chose " + computerChoice + ".";
}

function combat(){
    if(playerChoice === computerChoice){
        result.textContent = "It's a tie!";
        ties++;
        
    }
    
    else if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")){
        result.textContent = "You win!";
        wins++;
       
    }

    else if((playerChoice === "Rock" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Rock")){
        result.textContent = "You lost!";
        losses++;
        
    }
}

function playerMove(){
    rockBtn.addEventListener("click", function(){
         playerChoice = this.textContent;
         computerMove();
         combat();
         setScore();
         
     })

    paperBtn.addEventListener("click", function(){
        playerChoice = this.textContent;
        computerMove();
        combat();
        setScore();
        
    })

    scissorsBtn.addEventListener("click", function(){
        playerChoice = this.textContent;
        computerMove();
        combat();
        setScore();
    })
    
    
}


function playGame(){
    messages1.textContent = "Choose your weapon!"
    playerMove();
}

startBtn.addEventListener("click", function(){
    console.log("Start button pressed!")
    playGame();
});

     
    


