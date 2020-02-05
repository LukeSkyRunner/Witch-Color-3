
class Color {
  constructor (game) {
    this.game = game
    this.row = 0
    this.column = 0  
    this.color = ''
    this.text = ''
  }


pickUpRandomText (){

var textArray = ['BLUE','GREEN','PURPLE','BLACK','ORANGE']
var colorArray = ['blue','green','purple','black','orange']
this.text = textArray[Math.floor(Math.random()*textArray.length)];
this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

}

paintRandomText(){
this.game.context.font = "bolder 100px Sans-Serif"
this.game.context.fillStyle = `${this.color}`;
this.game.context.fillText(this.text, 250, 130);
}


}