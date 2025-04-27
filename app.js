
let gameSeq=[];
let userSeq=[];
let btns=["one","two","three","four"];

let started=false;
let level=0;
 let h3=document.querySelector("h3");


document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("Flashuser");
    setTimeout(function() {
        btn.classList.remove("Flashuser");
    },250);
}


function levelup(){
    userSeq=[]; 
    level++;
    h3.innerText= `the level is ${level}`;
    
    let randIdx= Math.floor(Math.random()*3);
    let  randbtn=btns[randIdx];
    let result=document.querySelector(`.${randbtn}`)
    gameSeq.push(randbtn);
  console.log(gameSeq);
    gameFlash(result);

}



 function checkans(idx){
         
            if(userSeq[idx]===gameSeq[idx]){
                console.log("correct");
                if(userSeq.length==gameSeq.length){
                console.log("correct");
               setTimeout(levelup,1000);
                }
            }else{
                h3.innerText = ("wrong game over");
                reset();

                
            }
 }

 function btnpressed(){
    let btn=this;
    console.log("btn was pressed!");
    userFlash(btn);
      userColor=btn.getAttribute("id");
      console.log(userColor);
        userSeq.push(userColor);
        checkans(userSeq.length-1);

    
 }


 let allBts=document.querySelectorAll(".element");
 for(btn of allBts){
   btn.addEventListener("click",btnpressed);
 }



 function reset (){
      started=false;
      gameSeq=[];
      userSeq=[];
      level=0;
 }
