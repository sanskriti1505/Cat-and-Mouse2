var tom, tom_1, tom_2, tom_3, tom_4;
var jerry, jerry_1, jerry_2, jerry_3, jerry_4;
var bg, bgImage;
function preload() {
    //load the images here
    tom_1 = loadAnimation("images/tomOne.png");
    tom_2 = loadAnimation("images/tomTwo.png");
    tom_3 = loadAnimation("images/tomThree.png");
    tom_4 = loadAnimation("images/tomFour.png");
    jerry_1 = loadAnimation("images/jerryOne.png");
    jerry_2 = loadAnimation("images/jerryTwo.png");
    jerry_3 = loadAnimation("images/jerryThree.png");
    jerry_4 = loadAnimation("images/jerryFour.png");
    bgImage = loadImage("images/garden.png");
  
  
  

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600,50,50);
jerry = createSprite(200,600,50,50);

  
}


function draw() {
    background(bgImage);
 //Write condition here to evalute if tom and jerry collide
 if(tom.x-jerry.x< (tom.width-jerry.width)/2){
     tom.velocityX=0;
     tom.addAnimation("tomLastImage",tom_4);
     tom.changeAnimation("tomLastImage");
     jerry.addAnimation("jerryLastImage",jerry_4);
     jerry.changeAnimation("jerryLastImage");
     tom.scale=0.4;
     jerry.scale=0.4;
 }

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tom_2);
    tom.changeAnimation("tomRunning");
    tom.scale= 0.4;
    jerry.scale=0.4;
}

}
