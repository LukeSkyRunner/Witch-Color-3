class Menu {
  constructor ($canvas) {
   this.canvas = $canvas
   this.context = $canvas.getContext('2d')
   this.keyStroke()
}


playMusicTheme(){
  var snd = new Audio ("./sounds/musictheme.mp3"); // buffers automatically when created
  snd.play();
}


drawBackground(){
    const backgroundImageUrl = './images/menubackground.jpg';
    const backgroundImage = new Image();
    backgroundImage.src = backgroundImageUrl;

    backgroundImage.addEventListener('load', () => {
    context.drawImage(backgroundImage, 0, 0)});
}

/*
drawButton() {
  const buttonImageUrl = './images/start-button.jpg';
  const buttonImage = new Image();
  buttonImage.src = buttonImageUrl;
  
  buttonImage.addEventListener('load', () => {
  context.drawImage(buttonImage, 370, 600)});
}
*/

drawMenu() {
  this.context.clearRect(0,0,900,720);
  this.drawBackground();
  this.playMusicTheme()
  //this.drawButton();
  console.log ('drawMenu')
}


keyStroke(){
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 13: 
        const game = new Game(this)
        game.gameIsRunning = true
        game.start(); 
        console.log ('game is true')
        break;
      }
  });
}

}