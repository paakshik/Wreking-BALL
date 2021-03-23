const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
blockG =[];
let opt = (
   200,200
)
function preload(){
    bgI  = loadImage('maxresdefault (1).jpg')
}
function setup(){
canvas = createCanvas(1500,900);
engine = Engine.create();
world = engine.world
ground = new Ground(450,900,3000,20);
for (let j = 440; j<1450;j = j + 100){
for(let i = 50;i < 800;i = i + 50){
block1 = new Building(j,i);
blockG.push(block1)
}
}
bob = new Bob(250,630);
wreker = new Wreker(180,780);
slingshot = new Sling(250,630,bob.body)

Engine.run(engine);

}
function draw(){
    background(0);
    imageMode(CENTER);  
    image(bgI,750,450,3000,900);
ground.show();
blockG.forEach(element => {
    element.show();  
});

wreker.show();
slingshot.show();
bob.show();
}
function mouseDragged(){
    Body.setPosition(bob.body,{x:mouseX,y:mouseY})
      }
 