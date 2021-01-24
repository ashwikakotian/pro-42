class   Drops
{
    constructor(x,y,r) 
    {
    var  options ={
        restitution:0.3,
        friction:0.003,

        isStatic:false,
        
    }

    this.r=r;

    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
}

    update(){
        if(this.body.position.y >height){
            Matter.Body.setPosition(this.body,{x : random(0,400)   ,y:random(0,400) })
        }
    }


    display(){
        var pos=this.body.position;

        
        fill("red")
        ellipseMode(CENTER)
        
        ellipse(pos.x,pos.y,this.r ,this.r)

    }
}