class Stone {
    constructor(x,y,r){
        var options = {
            restitution: 0,
            friction: 1,
            density: 1.2,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        fill(255);
        strokeWeight(4);
        stroke("green");
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();

    }
}