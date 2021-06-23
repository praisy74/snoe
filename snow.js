/*class Snow{
    constructor(x, y) {
        var options = {
            'friction':1.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 25;
        this.height = 25;
        this.imag = loadImage("blue.png");
        this.imag1 = loadImage("yellow.png");
        this.imag2 = loadImage("sky.png");
        this.imag3 = loadImage("pink.png");
        World.add(world,this.body);
      }
      display(){
        var pos=this.body.position
       // rectMode(CENTER)
        //rect(pos.x,pos.y,this.width,this.height)
        imageMode(CENTER)
        image(this.imag,pos.x,pos.y,50,50)
      }
}*/
class Snow {
    constructor(x, y) {
        var options = {
            friction: 0,
            isStatic:false
        }
        this.r = 15;
        this.body = Bodies.circle(x, y, this.r, options);
        
        this.imag = loadImage("blue.png");
        this.imag1 = loadImage("yellow.png");
        this.imag2 = loadImage("sky.png");
        this.imag3 = loadImage("pink.png")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

       
       // ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,this.r,this.r);
        imageMode(CENTER);
        image(this.imag3,pos.x,pos.y,30,30)

       
        
    }}