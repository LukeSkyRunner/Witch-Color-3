
class Stain {
  contructor (row) {
    this.row = row;
  }
}


var colors = ['green','purple','red','yellow','blue']

function setRandomColor (array){
  var randomColor = array[Math.floor(Math.random()*array.length)]
  return randomColor
}


setRandomColor (colors)



function drawRandomColorStain() {

  const brushImageUrl = ``;

  switch (randomColor) {
    case 'green':
    brushImageUrl = `./images/${randomColor}-stain.png`;
    break;
    case 'purple':
    brushImageUrl = `./images/${randomColor}-stain.png`;
    break;
    case 'red':
    brushImageUrl = `./images/${randomColor}-stain.png`;  
    break;
    case 'yellow':
    brushImageUrl = `./images/${randomColor}-stain.png`;  
    break;
    case 'blue':
    brushImageUrl = `./images/${randomColor}-stain.png`; 
  }

  const brushImage = new Image();
  brushImage.src = brushImageUrl;
  
  brushImage.addEventListener('load', () => {
    context.drawImage(brushImage, 860, 100 , 100, 100)});
  }
  
drawRandomColorStain()



/*

class Obstacle {
  constructor (positionX) {
    this.positionX = positionX;
    this.positionY = 0;
    this.height = 0;
    this.width = 30;

    this.setRandomPosition();
  }

  setRandomPosition () {
    this.positionY = Math.random() * 400;
    this.height = 100 + Math.random() * 100;
  }

  checkCollision () {
    const blockX = block.positionX;
    const blockY = block.positionY;
    const blockWidth = block.dimensions;
    const blockHeight = block.dimensions;

    const obstacleX = this.positionX;
    const obstacleY = this.positionY;
    const obstacleWidth = this.width;
    const obstacleHeight = this.height;
    
    if (
      blockX + blockWidth > obstacleX &&
      blockX < obstacleX + obstacleWidth &&
      blockY + blockHeight > obstacleY &&
      blockY < obstacleY + obstacleHeight
    ) {
      gameIsRunning = false;
    }
  }

  runLogic () {
    this.positionX -= 1.5;
    this.checkCollision();
  }

  paint () {
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
}

const obstacles = [];

for (let i = 0; i < 100; i++) {
  const obstacle = new Obstacle(200 + i * 250);
  obstacles.push(obstacle);
}

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};

const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

const paint = () => {
  cleanCanvas();

  block.paint();
  
  for (let obstacle of obstacles) {
    obstacle.paint();
  }
};

const loop = (timestamp) => {
  runLogic();
  paint();

  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};

loop();
*/