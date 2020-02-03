
class Stain {
  constructor (game) {
    this.game = game
    this.row = 0;
    this.positionX = 750
  }
  
  
  runLogic(){
    this.positionX -= 1.5
  }
  
drawAllStain(){
  
  let colors = ['./images/red-stain.png','./images/yellow-stain.png','./images/green-stain.png','./images/blue-stain.png','./images/purple-stain.png',]
  
  for (let i=0; i<5; i++){
   
   this.row = i
   let stainImageUrl = colors[i];
   let stainImage = new Image();
   stainImage.src = stainImageUrl;
   stainImage.addEventListener('load', () => {
   this.game.context.drawImage(stainImage, this.positionX, this.row * i *26 + 200, 100, 100)});
   }
  }
  
  
  
  
  /*
   runLogic () {
    this.row -= 1.5;
    }
  */
}

/*
  setRandomColor(){
    
    let colors = ['green','purple','red','yellow','blue']
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    let stainImageUrl = ``;
    
    switch (randomColor) {
      
      case 'green':
      stainImageUrl = `./images/${randomColor}-stain.png`;
      break;
        
      case 'purple':
      stainImageUrl = `./images/${randomColor}-stain.png`;
      break;
   
      case 'red':
      stainImageUrl = `./images/${randomColor}-stain.png`;  
      break;

      case 'yellow':
      stainImageUrl = `./images/${randomColor}-stain.png`;  
      break;

      case 'blue':
      stainImageUrl = `./images/${randomColor}-stain.png`; 
      break;
}

let stainImage = new Image();
stainImage.src = stainImageUrl;

stainImage.addEventListener('load', () => {
  this.game.context.drawImage(stainImage, 0, 0 , 100, 100)});
}*/





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