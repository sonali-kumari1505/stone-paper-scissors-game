let userScore=0;
let compScore=0;
const choiceses=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");
 const uScore=document.querySelector("#user-score");
 const cScore=document.querySelector("#comp-score");
 let reset=document.querySelector("#reset");
const genCompChoice=()=>{
    const options=["rock", "paper" ,"scissors"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
}
const  drawGame=()=>{
    msg.innerText="game was a draw. play again";
  msg.style.backgroundColor="yellow";
  msg.style.color="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        uScore.innerText=userScore;
msg.innerText=`you win!your choice ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        cScore.innerText=compScore;
        msg.innerText=`you lost, ${compChoice} beats your choice ${userChoice}`;
     msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
const compChoice=genCompChoice();
 if(compChoice===userChoice){
    drawGame();
 }  
 else{
   let userWin=true;
   if(userChoice==="rock"){
    //scissors ,paper
    userWin=compChoice==="paper"? false:true;
   }
   else if(userChoice==="paper"){
//rock,scissors
userWin=compChoice==="scissors"?false:true;
   }
   else if(userChoice==="scissors"){
userWin=compChoice==="rock"?false:true;
   }
   showWinner(userWin,userChoice,compChoice);
 } 
}
choiceses.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userChoice=choices.getAttribute("id");
       playGame(userChoice);
        });
})
reset.addEventListener("click",()=>{
    uScore.innerText="";
    cScore.innerText="";
    msg.innerText="play Your move";
    msg.style.backgroundColor="black";
  msg.style.color="white";
})