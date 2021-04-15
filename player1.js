class player1 extends baseclass{
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("sprites/dream.png")
    }

    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY
        super.display();
    }

}