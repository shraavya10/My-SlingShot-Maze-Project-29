class SlingShot{
    //defining the two bodies;bird and a point
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling1=loadImage("sling1.png");
        this.sling2=loadImage("sling2.png");
        this.sling3=loadImage("sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //calling the function to detach the bird when the mouse button is pressed
 fly(){
this.sling.bodyA=null;
 }
    display(){
        image(this.sling1,180,50);
        image(this.sling2,150,50);

        //displaying the the line by taking the two objects'position
        if(this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
      
        stroke(84,39,15);
        if( pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-10);
            line(pointA.x-20, pointA.y, pointB.x+60, pointB.y-30);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            
        }
        else{
        strokeWeight(3)
        line(pointA.x+25, pointA.y, pointB.x+20, pointB.y-30);
        line(pointA.x+25, pointA.y, pointB.x+40, pointB.y);
        image(this.sling3,pointA.x+25,pointA.y-10,15,30);

        }
       
        }
    }
    
}