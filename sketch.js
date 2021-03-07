var cat,catImg,catImg2,cat_moving
var mouse,mouseImg,mouseImg2,mouse_moving
var garden, gardenImg
function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png")
catImg=loadAnimation("images/cat1.png")
catImg2=loadAnimation("images/cat4.png")
cat_moving=loadAnimation("images/cat2.png","images/cat3.png")
mouseImg=loadAnimation("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse4.png")
mouse_moving=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,20,20)
    garden.addImage(gardenImg)

    cat = createSprite(700,660)
    cat.addAnimation("stand",catImg);
    cat.scale = 0.1;
  
    mouse = createSprite(100,660)
    mouse.addAnimation("first",mouseImg);
    mouse.scale = 0.1;
  
  }



function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(keyDown("LEFT_ARROW")){

        cat.velocityX = -5;
        cat.addAnimation("moving",cat_moving);
        cat.changeAnimation("moving");
        mouse.addAnimation("mouse",mouse_moving);
        mouse.changeAnimation("mouse");
        
        }
        
        if(cat.isTouching(mouse)){
        
            cat.velocityX = 0;
            mouse.addAnimation("mouseI",mouseImg2);
            mouse.changeAnimation("mouseI");
            cat.addAnimation("catworry",catImg2);
            cat.changeAnimation("catworry");
        }
        

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
