class catapault{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 50
        }
        this.catapault = Constraint.create(options);
        World.add(world, this.catapault);
    }
   
    fly(){
    this.catapault.bodyA = null;
    }
     
    display(){ if(this.catapault.bodyA){
        var pointA = this.catapault.bodyA.position;
        var pointB = this.catapault.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}