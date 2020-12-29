var pScore = document.querySelector("#pScore");
var cScore = document.querySelector("#cScore");
var tieScore = document.querySelector("#tieScore");

var startBtn = document.querySelector("#start");
var rockBtn = document.querySelector("#rockBtn");
var paperBtn = document.querySelector("#paperBtn");
var scissorsBtn = document.querySelector("#scissorsBtn");

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
}

function computerMove(){
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

function playGame(){
    playerMove();
    computerMove();
}

startBtn.addEventListener("click", playGame);




 
     
    //  // Combat
     
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
     
     console.log("wins: " + wins);
     console.log("losses: " + losses);
     console.log("ties: " + ties);

     tieScore.textContent = ties;
     pScore.textContent = wins;
     cScore.textContent = losses;
    


