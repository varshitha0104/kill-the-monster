class Monster {

	constructor(x,y,w,h)
	{

		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.body = Bodies.rectangle(x, y, w, h);
		this.image = loadImage("monster1.png");
 		World.add(world, this.body);

	}

	display(){

			var Pos = this.body.position;
			push()
			imageMode(CENTER);
			image(this.image,Pos.x-40, Pos.y+50,this.w, this.h);
			pop()
			
	}

}