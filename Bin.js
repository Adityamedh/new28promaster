class Bin {
constructor(x,y,width,height){
var options={
isStatic: true    
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
this.image = loadImage ("dustbingreen.png");
World.add(world,this.body);
}
display(){
var pos = this.body.position
rect(pos.x,pos.y,this.width,this.height)
imageMode(CENTER);
image(this.image,pos.x-50,pos.y,this.width+120,this.height+100);
}

}