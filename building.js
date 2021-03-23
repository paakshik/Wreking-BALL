class Building{
    constructor(x,y){
this.body = Bodies.rectangle(x,y,50,70,{friction:2,density:5});
World.add(world,this.body);
this.image = loadImage('istockphoto-131402851-612x612-removebg-preview.png')
    }
    show(){
        var pos = this.body.position;
        let Angle = this.body.angle
        push();
        imageMode(CENTER);
     
      
        translate(pos.x,pos.y);
        rotate(Angle);
        image(this.image,0,0,50,70);
        pop();
            }
}