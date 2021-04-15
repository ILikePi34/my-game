class player2 extends baseclass{
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("sprites/technoblade.png")
    }

    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY
        super.display();
    }

}