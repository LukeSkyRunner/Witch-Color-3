class Game {
  constructor (menu){
    this.canvas = menu.canvas
    this.context = menu.context
    this.brush = new Brush(this);
    this.stain = new Stain(this); 
    this.color = new Color(this);
    this.score = new Score(this);
    this.gameIsRunning = false;
    this.x = 0
    this.speed = 3
  }

drawGameBackground(){
  const backgroundImage = new Image();
  backgroundImage.src = './images/background.jpg';
  context.drawImage(backgroundImage, this.x, 0);
  context.drawImage(backgroundImage, 1592 + this.x, 0);
}


cleanCanvas(){
  this.context.clearRect(0,0,900,720);
  //console.log ('i clean canvas')
}

start(){
  var snd = new Audio("./sounds/witchlaugh.wav")
  snd.play();
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

  this.cleanCanvas();
  this.drawGameBackground()
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

  
  runLogic () {
    this.x -= this.speed;
    //console.log (`the x speed is: ${this.speed}`)
    //console.log (`the speed bb is: ${this.x}`)
    
    if (1592) {
      this.x = this.x % 1592;
    }
  }

  increaseBackgroundSpeed(){
    this.speed *= 1.05
  }


loop = (timestamp) => {
  // this.cleanCanvas()
  this.paint();
  this.stain.runLogic();
  this.runLogic()
  
  if (this.gameIsRunning != false) {
    window.requestAnimationFrame(this.loop)
  } 
  
}


}
