class Umblerla
{
    constructor(x,y,r) 
    {
    var  options ={
        
        isStatic:true
        
    }

this.r=50;
this.image=loadImage("images/Walking Frame/walking_1.png")
this.body=Bodies.circle(x,y,110,options)
World.add(world,this.body)
}
display(){
    var paperpos=this.body.position;

   
  
    imageMode(CENTER)
    
    image(this.image,paperpos.x,paperpos.y,300 ,300)
   pop()
}
}