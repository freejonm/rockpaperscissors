var pScore = document.querySelector("#pScore");
var cScore = document.querySelector("#cScore");
var tieScore = document.querySelector("#tieScore");
var startBtn = document.querySelector("#button");
var rockBtn = document.querySelector("#rock");
var paperBtn = document.querySelector("#paper")
var scisBtn = document.querySelector("#scissors");

var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["Rock", "Paper", "Scissors"];

startBtn.addEventListener("click", function(){
     // Player's choice
     rockBtn.addEventListener("click", function(){
         console.log(this.textContent);
     })

    //  var playerChoice = prompt("Choose r (rock), p (paper), or s (scissors)");
    
     // Computer's choice
     var computerChoice = choices[Math.floor(Math.random() * choices.length)];
     
     // Combat
     
     if(playerChoice === computerChoice){
         alert("It's a tie!");
         ties++;
         
     }
     
     else if((playerChoice === "r" && computerChoice === "s") || (playerChoice === "p" && computerChoice === "r") || (playerChoice === "s" && computerChoice === "p")){
         alert("You win!");
         wins++;
        
     }

     else if((playerChoice === "r" && computerChoice === "p") || (playerChoice === "p" && computerChoice === "s") || (playerChoice === "s" && computerChoice === "r")){
         alert("You lost!");
         losses++;
         
     }
     
     console.log("wins: " + wins);
     console.log("losses: " + losses);
     console.log("ties: " + ties);

     tieScore.textContent = ties;
     pScore.textContent = wins;
     cScore.textContent = losses;
    })


