const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;


class Brush {
  constructor (row) {
    this.row = row
  }
      
      moveUp(){
        if (this.row > 0){
        this.row--
        }
      }

      moveDown(){
        if (this.row < 4){
        this.row++
        }
      }
  }


const player = new Brush(0);



function drawPlayer() {

  const brushImageUrl = './images/paint-brush.png';
  const brushImage = new Image();
  brushImage.src = brushImageUrl;
  
  brushImage.addEventListener('load', () => {
    context.drawImage(brushImage, 40, player.row * 100 , 100, 100)});
  }
  

function drawGrid() {
  /*
  for (var x = 0; x <= 900; x += 125) {
    context.moveTo(x, 0);
    context.lineTo(x, 0);
  }
  */
  for (var y = 0; y <= 900; y += 100) {
    context.moveTo(0, y);
    context.lineTo(900, y);
  }
  
  context.strokeStyle = "";
  context.stroke();  
  }


  window.addEventListener('keydown', (event) => {
     
    switch (event.keyCode) {
      case 40:
        event.preventDefault();
        player.moveDown();
        console.log('down')
        drawEverything();
        break;
        case 38:
          event.preventDefault();
          player.moveUp();
        console.log('up')
        drawEverything();
        break;
    }
  });


     function drawEverything() {
          context.clearRect(0,0,900,500);
          drawGrid();
          drawPlayer();
        }
  
   drawEverything()