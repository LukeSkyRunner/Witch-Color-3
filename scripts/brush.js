
class Brush {
  constructor (game) {
    this.game = game
    this.row = 2
  }
      
      moveUp(){
        if (this.row > 2){
        this.row--
        }
      }

      moveDown(){
        if (this.row < 6){
        this.row++
        }
      }
      
      
      drawPlayer() {
      
        const brushImageUrl = './images/paint-brush.png';
        const brushImage = new Image();
        brushImage.src = brushImageUrl;
        
        brushImage.addEventListener('load', () => {
          this.game.context.drawImage(brushImage, 40, this.row * 100 , 100, 100)});
        }
        
  }

/*
const player = new Brush(0);
*/


