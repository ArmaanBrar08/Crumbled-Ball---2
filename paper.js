class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        };
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("ball.png")
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        image(this.image)
        ellipse(pos.x, pos.y, this.width, this.height);
    };
};
