class Game {
  constructor ($canvas){
    this.canvas = $canvas
    this.context = $canvas.getContext('2d')
    this.brush = new Brush(this);
    this.stain = new Stain(this);
    this.keyStroke()
    
  }


drawEverything(){
  context.clearRect(0,0,900,700);
  drawGrid()        
  this.stain.drawAllStain()
  this.brush.drawPlayer();
  this.stain.moveColors();
  
}

keyStroke(){
  window.addEventListener('keydown', (event) => {
    console.log(this.brush)
    switch (event.keyCode) {
      case 40:
        event.preventDefault();
        this.brush.moveDown();
        this.drawEverything();
      break;
      case 38:
        event.preventDefault();
        this.brush.moveUp();
        this.drawEverything();
      break;
    }
  });
}


}



