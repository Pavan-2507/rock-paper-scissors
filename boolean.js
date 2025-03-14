const choices=["rock", "paper", "scissors" ];
const playerDispaly=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");


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
  console.log(playerchoice);
  console.log(computerchoice);
   playerDispaly.textContent=`PLAYER: ${playerchoice}`;
   computerDisplay.textContent=`COMPUTER: ${computerchoice}`;
  resultDisplay.textContent=result;
  console.log(result);
  }