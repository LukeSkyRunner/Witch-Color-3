
class Brush {
  constructor (game) {
    this.game = game
    this.positionX = 0
    this.positionY = 40
    this.width = 100
    this.height = 100
    this.keyStroke()
  }
      
  moveUp(){
    if (this.positionX > 0){
      this.positionX--
     

    }
  }
  
  moveDown(){
    if (this.positionX < 4){
      this.positionX++
      
    }
  }
  
  
  
  drawPlayer() {
    const brushImageUrl = './images/paint-brush.png';
    const brushImage = new Image();
    brushImage.src = brushImageUrl;
    this.game.context.drawImage(brushImage, this.positionY, (this.positionX * 100) + 200, this.width, this.height)
  }


  keyStroke(){
  window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
    case 40:
      event.preventDefault();
      this.moveDown();
      
    break;
    case 38:
      event.preventDefault();
      this.moveUp();
      
    break;
  }
  });
  }
}

      /*
const player = new Brush(0);
*/


