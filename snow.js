class Snow{
    constructor(x, y,r) {
     var opt = {
         restitution:0.4,
         friction:0.9,
        }  
    this.r=r
    this.body =Bodies.circle(x,y,this.r,opt)
    this.snow = loadImage ("snow4.webp")
    World.add(world,this.body )
    }
  display()
  {
    var pos = this.body.position  
    image (this.snow , pos.x,pos.y)
    push()
  translate(pos.x,pos.y)
  imageMode(CENTRE)
  nostroke()
  ellipseMode (RADIUS)
  ellipse(0,0,this.r,this.r)
  pop()
  }
}