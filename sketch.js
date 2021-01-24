var thunder ,thunderAni
var maxDrops=100
var drops =[]
var boy 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
    
    thunderAni=loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}

function setup(){
    createCanvas(400,600)
    
   

    
    engine = Engine.create();
    world = engine.world;
    
    
    boy=new Umblerla(200,400)

    if(frameCount %100 ===0){
        for(var i=0;i<maxDrops;i++){
         drops.push(new Drops(random (0,400),random (0,400),4))
        }
    }  
    if (frameCount %60===0){
        thunder=createSprite(random(50,300),100)
        thunder.scale= 0.3
        thunder.addAnimation("thunder",thunderAni);
    } 
    

}

function draw(){
    background(0)
    Engine.update(engine);
   
    
    
    boy.display();


    for (var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();

    }
    
    drawSprites()
}   

