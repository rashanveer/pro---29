class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image  = loadImage("polygon.png")
     this.polygon = Bodies.circle(50,200,20)
        World.add(world, this.polygon);

        slingShot = new slingShot(this.polygon,{x:100,y:200},options);
    }

    fly(){
        this.slingShot.polygon = null;
    }

    display(){
        var pos =this.polygon.position;    

     imageMode (CENTRE)
     image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    }
    
}