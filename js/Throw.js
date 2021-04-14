class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.threw = Constraint.create(options);
        World.add(world, this.threw);
    }

    fly(){
        this.threw.bodyA = null;
    }

    display(){
        if(this.threw.bodyA){
            var pointA = this.threw.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}