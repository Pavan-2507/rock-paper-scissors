const choices=["rock", "paper", "scissors" ];
const playerDispaly=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScore=document.getElementById("playerScore");
 const computerScore=document.getElementById("computerScore");
 const draw=document.getElementById("draw");
   let myscore=0;// updating my current wins




   let computer=0;
   let drawc=0;


function playgame(playerchoice){
  const computerchoice=choices[Math.floor(Math.random()*3)];
  console.log(Math.random());
  let result="";

  if(playerchoice===computerchoice){
    result="IT'S A TIE";
  }else{
    switch(playerchoice){
      case "rock":
           result= (computerchoice==="scissors")? "YOU WIN!": "YOU LOSE!";
           break;
    

     case "paper":
           result= (computerchoice==="rock")? "YOU WIN!": "YOU LOSE!";
           break;

     case "scissors":
            result= (computerchoice==="paper")? "YOU WIN!": "YOU LOSE!";
            break;       
    }
  }

  if(result=== "YOU WIN!"){
    myscore=myscore+1;
  }
  
    else if(result=== "YOU LOSE!"){
     computer=computer+1;
  }else{
    drawc=drawc+1;
  }
  console.log(playerchoice);
  console.log(computerchoice);
   playerDispaly.textContent=`PLAYER: ${playerchoice}`;
   computerDisplay.textContent=`COMPUTER: ${computerchoice}`;
  resultDisplay.textContent=result;
  console.log(result);
     playerScore.textContent=`YOU:${myscore}`;
    computerScore.textContent=`COMPUTER:${computer}`;
    draw.textContent=`TIE:${drawc}`;
  }

function resetgame(){
  myscore = 0;
  computer = 0;
  drawc = 0;

  playerDisplay.textContent = "PLAYER :";
  computerDisplay.textContent = "COMPUTER :";
  resultDisplay.textContent = "";
  playerScore.textContent = "YOU:0";
  computerScore.textContent = "COMPUTER:0";
  draw.textContent = "TIE:0";
}
