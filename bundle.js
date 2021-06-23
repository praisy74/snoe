class Wood{
    constructor(x,y) {
        var options = {

            friction :0.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 15;
        this.height =15;
        this.image=loadImage("wood1.png")
        World.add(world, this.body);

      }
     
      display(){
        var pos= this.body.position;
       // rectMode(CENTER);
        //rect(pos.x,pos.y,15, 15);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 180,120)
      }}