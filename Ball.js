class Ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);

        //this.width = width;
       // this.height = height;
       // this.radius=radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
         push();
        translate(this.body.position.x, this.body.position.y);
        // this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        rotate(angle);
        fill("blue");
        ellipseMode(CENTER);
        ellipse( 0, 0,this.radius);
        pop();
      }
}