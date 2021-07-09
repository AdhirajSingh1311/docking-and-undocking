var bg ;
var spaceCraft,spaceCraftImg,scImg2,scImg3,scImg4;
var iss,issImg;
var hasDocked=false;


function preload(){

bg=loadImage("spacebg.jpg");
spaceCraftImg =loadImage("spacecraft1.png");
scImg2=loadImage("spacecraft2.png");
scImg3=loadImage("spacecraft3.png");
scImg4=loadImage("spacecraft4.png"); 
issImg=loadImage("iss.png");






}



function setup() {
  createCanvas(800,400);

  iss=createSprite(300,130,100,100);
  iss.addImage(issImg);
  iss.scale=0.5

  spaceCraft=createSprite(280,240,100,100)
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale=0.15
  
}

function draw() {
  background(bg);  

if(!hasDocked){

spaceCraft.x=spaceCraft.x+random(-1,1);

if(keyDown===LEFT_ARROW){

  spaceCraft.x=spaceCraft.x-1;
  spaceCraft.addImage(scImg3);
}
if(keyDown===RIGHT_ARROW){

  spaceCraft.x=spaceCraft.x+1;
  spaceCraft.addImage(scImg4)
}
if(keyDown===DOWN_ARROW){

  
  spaceCraft.addImage(scImg2);
}
if(keyDown===UP_ARROW){

  spaceCraft.y=spaceCraft.y-1;
}
}
if(spaceCraft.y<=(iss.y+70)&& spaceCraft.x<=(iss.x-10)){

hasDocked=true;
textSize(25);
fill("white")
text("docking succesful",200,300);



}


  drawSprites();
}