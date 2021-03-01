var cat,catImg,catImg2,cat_moving
var mouse,mouseImg,mouseImg2,mouse_moving
var garden, gardenImg
function preload() {
    //load the images here
gardenImg=loadImage("garden.png")
catImg=loadImage("cat1.png")
catImg2=loadImage("cat4.png")
cat_moving=loadAnimation("cat2.png","cat3.png")
mouseImg=loadImage("mouse1.png")
mouseImg2=loadImage("mouse4.png")
mouse_moving=loadAnimation("mouse2.png","mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,20,20)
    garden.addImage(gardenImg)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
