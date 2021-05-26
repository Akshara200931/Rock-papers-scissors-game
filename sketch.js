var paper1,scissors1,rock1,play1,scissors,paper,rock,s,r,p,logo1;
var gameState;
var rps,rps1,rps2

var computerscore=0
var playerscore=0

var gameState="start"
var r1,p1,s1;


function preload(){
rock1=loadImage("rock.png")
paper1=loadImage("paper.png")
scissors1=loadImage("scissors.png")
play1=loadImage("playbutton.png")
logo1=loadImage("sign.png")
rps1=loadImage("rps.png")
}

function setup(){
    createCanvas(2000,1500)

    

   
   
    
    logo=createSprite(833,106,40,80)
    logo.addImage("logo image",logo1)
    logo.scale=2

    rps=createSprite(158,110,40,80)
    rps.addImage("rock paper scissors",rps1)
    rps.scale=0.2
    rps.visible=false

    rps2=createSprite(1617,110,40,80)
    rps2.addImage("rock paper scissors",rps1)
    rps2.scale=0.2
    rps2.visible=false
    


    


    
    
 
    
    scissors=createSprite(1036,706,40,80)
    scissors.addImage("scissorsimg",scissors1)
    scissors.scale=1
    scissors.visible=false

    s=createSprite(433,358,40,80)
    s.addImage("scissorsimg1",scissors1)
    s.visible=false;
    

    paper=createSprite(705,708,40,80)
    paper.addImage("paperimg",paper1)
    paper.scale=2
    paper.visible=false

    p=createSprite(433,358,40,80)
    p.addImage("paperimg1",paper1)
    p.visible=false;
    p.scale=2



    rock=createSprite(549,706,40,80)
    rock.addImage("rockimg",rock1)
    rock.scale=0.2
    rock.visible=false

    r=createSprite(433,358,40,80)
    r.addImage("rockimg1",rock1)
    r.visible=false;
    r.scale=0.2

   
   
    s1=createSprite(1042,358,40,80)
    s1.addImage("scissorsimg2",scissors1)
    s1.visible=false;
    s1.scale=1

     p1=createSprite(1042,358,40,80)
    p1.addImage("paperimg2",paper1)
    p1.visible=false;
    p1.scale=2

    
    r1=createSprite(1042,358,40,80)
    r1.addImage("rockimg2",rock1)
    r1.visible=false;
    r1.scale=0.2

    
    }
  
function draw(){
background("yellow")
text(mouseX+","+mouseY,mouseX,mouseY)
fill("black")
textSize(30)
text(computerscore,1280,174)

text(playerscore,325,174)

if(gameState==="start"){
  var play=createSprite(760,477,40,80)
    play.addImage("play button",play1)

   var r2=createSprite(133,146,40,80)
   var p2=createSprite(530,205,40,80)
   var s2=createSprite(1154,205,40,80)
    
    r2.addImage("rock11",rock1)
    r2.scale=0.2

    p2.addImage("paper11",paper1)
    p2.scale=2
    
    s2.addImage("scissors11",scissors1)

    if(mousePressedOver(play)){

 
        console.log("play")
        gameState="begin"
        }
        

}
else if(gameState==="begin"){
    play.visible=false
    scissors.visible=true
    paper.visible=true
    rock.visible=true
    r2.visible=false
    s2.visible=false
    p2.visible=false
    rps.visible=true
    rps2.visible=true
    
if(mousePressedOver(scissors)){
    s.visible=true
    r.visible=false
    p.visible=false

    console.log("a")
    
 aI2()
   }

   if(mousePressedOver(paper)){
    p.visible=true
    s.visible=false
    r.visible=false

   aI1()
   }
   
   if(mousePressedOver(rock)){
    r.visible=true
    p.visible=false
    s.visible=false


    
    
    aI()
   }
   

    
}
drawSprites()
}

function aI(){
   

    var rand=Math.round(random(1,3))
    console.log(rand)

if(rand===1){
playerscore+=1
}
else if(rand===3){
computerscore+=1
}



    switch(rand){
    case 1:{
        
    s1.visible=true;
    r1.visible=false;
    p1.visible=false;
    }
     break;
    case 2:
{
    r1.visible=true;
    s1.visible=false;
    p1.visible=false;
}
     break;
    case 3:
 {
    p1.visible=true;
    r1.visible=false;
    s1.visible=false;
 }
     break;
    }

}

function aI1(){
   

    var rand=Math.round(random(1,3))
    console.log(rand)

if(rand===2){
playerscore+=1
}
else if(rand===1){
computerscore+=1
}



    switch(rand){
    case 1:{
        
    s1.visible=true;
    r1.visible=false;
    p1.visible=false;
    }
     break;
    case 2:
{
    r1.visible=true;
    s1.visible=false;
    p1.visible=false;
}
     break;
    case 3:
 {
    p1.visible=true;
    r1.visible=false;
    s1.visible=false;
 }
     break;
    }

}


function aI2(){
   

    var rand=Math.round(random(1,3))
    console.log(rand)

if(rand===3){
playerscore+=1
}
else if(rand===2){
computerscore+=1
}



    switch(rand){
    case 1:{
        
    s1.visible=true;
    r1.visible=false;
    p1.visible=false;
    }
     break;
    case 2:
{
    r1.visible=true;
    s1.visible=false;
    p1.visible=false;
}
     break;
    case 3:
 {
    p1.visible=true;
    r1.visible=false;
    s1.visible=false;
 }
     break;
    }

}




