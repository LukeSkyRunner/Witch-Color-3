
class Brush {
  constructor (game) {
    this.game = game
    this.positionY = 0
    this.positionX = 40
    this.width = 100
    this.height = 100
    this.keyStroke()
  }
      
  moveUp(){
    if (this.positionY > 0){
      this.positionY--
     

    }
  }
  
  moveDown(){
    if (this.positionY < 4){
      this.positionY++
      
    }
  }
  
  
  
  drawPlayer() {
    const brushImageUrl = './images/witch.png';
    const brushImage = new Image();
    brushImage.src = brushImageUrl;
    this.game.context.drawImage(brushImage, this.positionX, (this.positionY * 80) + 240, this.width, this.height)
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


