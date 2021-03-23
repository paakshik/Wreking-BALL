class Wreker{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,200,300,{isStatic:true});
        World.add(world,this.body);
    this.image = loadImage('images__1_-removebg-preview (1).png');
            }
            show(){
                var pos = this.body.position;
          
                push();
                imageMode(CENTER);
                fill('blue');
                noStroke();
                translate(pos.x,pos.y);
             
                image(this.image,0,0,200,300);
                pop();
                    }
        }