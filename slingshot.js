class Slingshot{
    constructor(bodyA,pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
length:10,
stiffness:0.5}
this.slingshot = Constraint.create(options)
this.pointB = pointB
World.add(world,this.slingshot);

    }
    fly(){
        this.slingshot.bodyA = null
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position
            var pointB = this.pointB
            
        }
        
       
    }
}