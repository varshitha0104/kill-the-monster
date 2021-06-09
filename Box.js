class Box {
  constructor(x,y,w,h){
      var options={
          restitution:0.8,
          friction:1,
          density:0.04

      }
      this.body=Bodies.rectangle(x,y,w,h,options)
      this.x=x;
      this.x=x;
      this.w=w;
      this.h=h;
      World.add(world,this.body)
  }
  display(){
      var pos = this.body.position
      push()
      fill("red")
      rectMode(CENTER)
      rect(pos.x,pos.y,this.w,this.h)
      pop()
  }
}