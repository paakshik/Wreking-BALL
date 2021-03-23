class Sling{
    constructor(x,y,body){
    const opts = {
    pointB: {
    x:x ,
    y:y 
    
    },
    bodyA:body,
    stiffness:0.05,
    length: 150  
    
    }
    
    this.sling = Matter.Constraint.create(opts);
    World.add(world,this.sling);
    }
    show(){
    push();
    
       
    
    let posB= this.sling.pointB;    
    let posA=this.sling.bodyA.position 
    
    strokeWeight(2);
    stroke(rgb(132,134,132))
    
    line(posA.x,posA.y,posB.x ,posB.y  + 20);
  
    
    
    
        }
    }      
  