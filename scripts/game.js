class Game {
  constructor (menu){
    this.canvas = menu.canvas
    this.context = menu.context
    this.brush = new Brush(this);
    this.stain = new Stain(this); 
    this.color = new Color(this);
    this.score = new Score(this);
    this.gameIsRunning = false;
    
  }


cleanCanvas(){
  this.context.clearRect(0,0,900,720);
  //console.log ('i clean canvas')
}

start(){
  this.loop()
  this.color.pickUpRandomText();
}

gameOver(){
  this.gameIsRunning = false
    const backgroundImageUrl = './images/gameover.jpg';
    const backgroundImage = new Image();
    backgroundImage.src = backgroundImageUrl;
    
    backgroundImage.addEventListener('load', () => {
    context.drawImage(backgroundImage, 0, 0)});

}

paint = () => {

  //this.cleanCanvas();
  this.stain.drawAllStain();
  this.brush.drawPlayer();
  this.color.paintRandomText()
  this.score.paintScore()
  
  if (this.score.life <= 0){
    this.gameOver()
  } else {
  this.score.paintLife2()
  }
}
  //console.log (`position brush Y ${this.brush.positionY}, X ${this.brush.positionX}`)

  



loop = (timestamp) => {
  this.cleanCanvas()
  this.paint();
  this.stain.runLogic();
  
  if (this.gameIsRunning != false) {
    window.requestAnimationFrame(this.loop)
  } 
  
}


}
