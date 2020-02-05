
class Score {
  constructor (game) {
    this.game = game
    this.score = 0
    this.life = 3
    this.positionY = 150
    this.positionX = 600
  }


paintScore(){
let scoreString = this.score.toString()
this.game.context.font = "40px Sans-Serif"
this.game.context.fillStyle = 'black';
this.game.context.fillText(`Score: ${scoreString}`, 10, 130);
}

paintLife2(){
let lifeString = this.life.toString()
this.game.context.font = "40px Sans-Serif"
this.game.context.fillStyle = 'black';
this.game.context.fillText(`Life: ${lifeString}`, 700, 130);
}

paintLife(){
  console.log ('im printing the cross')  
  const crossImageUrl = './images/lifecross.png';
    const crossImage = new Image();
    crossImage.src = crossImageUrl;
    this.game.context.drawImage(crossImage, this.positionX, this.positionY, 50, 50)
    this.life -= 1
    this.positionX +=55
}

}