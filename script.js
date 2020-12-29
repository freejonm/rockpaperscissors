var pScore = document.querySelector("#pScore");
var cScore = document.querySelector("#cScore");
var tieScore = document.querySelector("#tieScore");

var startBtn = document.querySelector("#start");
var rockBtn = document.querySelector("#rockBtn");
var paperBtn = document.querySelector("#paperBtn");
var scissorsBtn = document.querySelector("#scissorsBtn");

var messages = document.querySelector("#messages");

var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["Rock", "Paper", "Scissors"];


var playerChoice = "";
var computerChoice = "";

function playerMove(){
    rockBtn.addEventListener("click", function(){
         playerChoice = this.textContent;
         
     })

    paperBtn.addEventListener("click", function(){
        playerChoice = this.textContent;
        
    })

    scissorsBtn.addEventListener("click", function(){
        playerChoice = this.textContent;
        
    })
    console.log(playerChoice);
}

function computerMove(){
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(computerChoice);
}

function combat(){
    if(playerChoice === computerChoice){
        alert("It's a tie!");
        ties++;
        
    }
    
    else if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")){
        alert("You win!");
        wins++;
       
    }

    else if((playerChoice === "Rock" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Rock")){
        alert("You lost!");
        losses++;
        
    }
}

function playGame(){
    messages.textContent = "Choose your weapon!"
    playerMove();
    computerMove();
    combat();
}

startBtn.addEventListener("click", function(){
    console.log("Start button pressed!")
    playGame();
});

     tieScore.textContent = ties;
     pScore.textContent = wins;
     cScore.textContent = losses;
    


