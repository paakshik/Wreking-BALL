class Ground{
    constructor(x,y,width,height){
        
        this.width = width;
        this.height= height
this.body = Bodies.rectangle(x,y,this.width,this.height,{isStatic:true})
World.add(world,this.body);
    }
    show(){
var pos = this.body.position;
rectMode(CENTER);
noFill();
noStroke();
rect(pos.x,pos.y,this.width,this.height);

    }
}