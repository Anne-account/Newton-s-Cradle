class Roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}
	
		this.body=Bodies.rectangle(400,100,300,10,options);
		this.width=300;
		this.height=10;
 		World.add(world, this.body);
	}

	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x,pos.y);
			rectMode(CENTER);
			fill(128,128,128);
			rect(0,0,300,10);
			pop();
	}
}