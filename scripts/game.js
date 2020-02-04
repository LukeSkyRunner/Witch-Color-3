class Game {
  constructor (menu){
    this.canvas = menu.canvas
    this.context = menu.context
    this.brush = new Brush(this);
    this.stain = new Stain(this); 
    this.color = new Color(this);
    this.gameIsRunning = false;
    
  }


cleanCanvas(){
  this.context.clearRect(0,0,900,700);
  //console.log ('i clean canvas')
}

start(){
  this.loop()
  this.color.pickUpRandomText();
}


paint = () => {

  //this.cleanCanvas();
  this.stain.drawAllStain();
  this.brush.drawPlayer();
  this.color.paintRandomText()
  console.log (`position brush Y ${this.brush.positionY}, X ${this.brush.positionX}`)

  
}


loop = (timestamp) => {
  this.cleanCanvas()
  this.paint();
  this.stain.runLogic();
  
  if (this.gameIsRunning != false) {
    window.requestAnimationFrame(this.loop)
  } 
  
}


}
