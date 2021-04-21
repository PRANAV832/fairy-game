var starImage,backgroundImage;
var star, starBody;
var fairy,fairyImage;
var fairyVoice;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImage = loadImage("images/star.png");
	backgroundImage = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    fairyVoice=loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();
	//create fairy sprite and add animation for fairy

	star = createSprite(640,30);
	star.addImage(starImage);
	star.scale = 0.2;

	fairy = createSprite(100,375,20,20);
	fairy.addAnimation("fairyFlying",fairyImage);
	fairy.scale=0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(640 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(backgroundImage);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  //write code to stop star in the hand of fairy

if(star.y > 340 && starBody.position.y > 340){
Matter.Body.setStatic(starBody,true);
}

drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right

	if(keyCode === LEFT_ARROW){
		fairy.x=fairy.x-35;
	  
	  }
	
	  if(keyCode === RIGHT_ARROW){
		fairy.x=fairy.x+35;
	  
	  }
	
}
