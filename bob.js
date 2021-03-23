class Bob{
constructor(x,y){
    this.body = Bodies.circle(x,y,40,{friction:4,density:10});
    World.add(world,this.body);
}
show(){
    var pos = this.body.position;
    let Angle = this.body.angle;
    push();
    rectMode(CENTER);
    fill('black');
    noStroke();
    translate(pos.x,pos.y);
    rotate(Angle);
    ellipse(0,0,60);
    pop();

}

}