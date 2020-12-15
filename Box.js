class Box {
    constructor(x, y, width, height){
      var options={
        restution: 0.7,
        friction:0.7,
        density:0.9
      }

      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body)
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("blue");
      pop();
    }
  
  }
  