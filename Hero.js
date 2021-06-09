class hero {

	constructor(x,y,w,h)
	{
		var options={
            
            density:1,
            friction:0

        }
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.body = Bodies.rectangle(x, y, w, h , options);
		this.image = loadImage("superhero1.png");
 		World.add(world, this.body);

	}

	display(){

			var Pos = this.body.position;
			push()
			imageMode(CENTER);
			image(this.image,Pos.x, Pos.y,this.w, this.h);
			pop()
			
	}

}