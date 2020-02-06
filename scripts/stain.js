
class Stain {
  constructor (game) {
    this.game = game
    this.positionY = 0;
    this.positionX = 950
    this.width = 100
    this.heght = 100
    this.speed = 4
  }
  

  
  drawAllStain(){
    
    let colors = ['./images/redpotion.png','./images/orangepotion.png','./images/greenpotion.png','./images/bluepotion.png','./images/purplepotion.png',]
    for (let i=0; i<5; i++){
      this.positionY = i
      /*
      if (this.positionY === 0) {
        this.game.context.fillStyle = 'black'
        this.game.context.fillRect(this.positionX + 40, (this.positionY * 100)+285, 900, 25)
      } else if (this.positionY === 1) {
        this.game.context.fillStyle = 'orange'
        this.game.context.fillRect(this.positionX + 40, (this.positionY * 100)+285, 900, 25)     
      } else if (this.positionY === 2) {
        this.game.context.fillStyle = 'green'
        this.game.context.fillRect(this.positionX + 40, (this.positionY * 100)+285, 900, 25)
      } else if (this.positionY === 3) {
        this.game.context.fillStyle = 'blue'
        this.game.context.fillRect(this.positionX + 40, (this.positionY * 100)+285, 900, 25)
      } else if (this.positionY === 4) {
        this.game.context.fillStyle = 'purple'
        this.game.context.fillRect(this.positionX + 40, (this.positionY * 100)+285, 900, 25)
      }
    */
      let stainImageUrl = colors[i];
      let stainImage = new Image();
      stainImage.src = stainImageUrl;
      this.game.context.drawImage(stainImage, this.positionX, (this.positionY * 80)+270, 60, 60);
      //console.log(this.row)

      }
  }
    

  checkCollision(){
     
    const brush = this.game.brush

     const brushY = brush.positionY
     let brushX = brush.positionX
     const brushHeight = brush.height

     
     const stainX = this.positionX
 
     if (brushX + brushHeight > stainX + 30) {
       
      var snd = new Audio('./sounds/bubble.wav'); 
      
       this.positionX = 950;
       //console.log (brushY)
      if (brushY === 0 && this.game.color.text === 'RED') {
  
        //console.log (`pickUp ${this.game.color.text} in ${brushY}`)
        //console.log ('pickup Red right!')
        snd.play()
        this.game.score.score += 1;
      } else if (brushY === 1 && this.game.color.text === 'ORANGE') {
  
        //console.log (`pickUp ${this.game.color.text} in ${brushY}`)
        //console.log ('pickup Yellow right!')    
        snd.play()
        this.game.score.score += 1;
      }   else if (brushY === 2 && this.game.color.text === 'GREEN') {
  
        //console.log (`pickUp ${this.game.color.text} in ${brushY}`)
        //console.log ('pickup Green right!')      
        snd.play()
        this.game.score.score += 1;
      }     else if (brushY === 3 && this.game.color.text === 'BLUE') {
  
        //console.log (`pickUp ${this.game.color.text} in ${brushY}`)
        //console.log ('pickup Blue right!')       
        snd.play()
        this.game.score.score += 1;
      }       else if (brushY === 4 && this.game.color.text === 'PURPLE') {
        //console.log (`pickUp ${this.game.color.text} in ${brushY}`)
        //console.log ('pickup Purple right!')        
        snd.play()
        this.game.score.score += 1;
      } else {
  
        var snd2 = new Audio('./sounds/dropfail.wav'); 
        snd2.play()//console.log ('i m painting a cross')
        this.game.score.life -= 1
        }
      
      this.game.color.pickUpRandomText();
      this.increaseSpeed()
      this.game.increaseBackgroundSpeed()

    }
  } 

  increaseSpeed(){
    /*
    if (this.game.score.score >= 0 && this.game.score.score < 6) {
      this.speed = 4
    } else if (this.game.score.score >= 7 && this.game.score.score < 14) {
      this.speed = 6
    } else if (this.game.score.score >= 15 && this.game.score.score < 25){
      this.speed = 10
    } else if (this.game.score.score >= 26 && this.game.score.score < 30){
      this.speed = 13
    }*/
    if (this.game.score.score < 27) { 
    this.speed *= 1.025
    } else {
      this.speed = 11.76
    }
  }


    runLogic(){  
      this.positionX -= this.speed
      //console.log (`speed is : ${this.speed}`)
      //console.log (`position Y of Stain is now: ${this.positionY}`)
      this.checkCollision()
         }
      
                
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