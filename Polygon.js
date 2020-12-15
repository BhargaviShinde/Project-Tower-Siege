class Polygon{
    constructor(x,y,width,height){
        var options={
            friction:0.8,
            density:0.8
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");  
        this.body = Bodies.rectangle(x,y,width,height,options);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}