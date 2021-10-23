class Rope{
	constructor(body1,body2, offsetX)
	{
		this.offsetX=offsetX;
		
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:0}
		}

		this.rope=Constraint.create(options);
		World.add(world,this.rope);
	}
	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(3);
		line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
	}

}