var  cat1,cat2,cat3;
var  mouse1,mouse2,mouse3,mouse4;
var bg;
var tom;
var jerry;

function preload() {
    //load the images here

   bg=loadImage("images/garden.png")
   cat1=loadAnimation("images/cat1.png");
   cat2=loadAnimation("images/cat2.png","images/cat3.png");
   cat3=loadAnimation("images/cat4.png");
   mouse1=loadAnimation("images/mouse1.png");
   mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    tom=createSprite(750,600);
    tom.addAnimation("cat_standing",cat1);
    tom.scale=0.2;
    jerry=createSprite(50,600);
    jerry.addAnimation("jerrystanding",mouse1);
    jerry.scale=0.2;
}

function draw() {

    background(bg);

    //Write condition here to evalute if tom and jerry collide
    
if (tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.addAnimation("cat_stopped",cat3);
tom.changeAnimation("cat_stopped");
tom.x=750;
tom.velocityX=0;
jerry.addAnimation("jerry_stop",mouse4);
jerry.changeAnimation("jerry_stop");
}
    
  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode===LEFT_ARROW){
    tom.velocityX=-3;
   
    tom.addAnimation("cat_running",cat2);
    tom.changeAnimation("cat_running");
    jerry.addAnimation("jerry_tease",mouse2);
    jerry.changeAnimation("jerry_tease");
}

}
