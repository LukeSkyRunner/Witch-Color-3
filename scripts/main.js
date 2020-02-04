const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;


const menu = new Menu($canvas)
menu.drawMenu()

  /*
$canvas.addEventListener("click", event => {
  console.log("click event",event)
})



function drawBackground() {
  
  const backgroundImageUrl = './images/menubackground.jpg';
  const backgroundImage = new Image();
  backgroundImage.src = backgroundImageUrl;
    
  backgroundImage.addEventListener('load', () => {
    context.drawImage(backgroundImage, 0, 0)});

}

function drawButton() {
const buttonImageUrl = './images/start-button.jpg';
const buttonImage = new Image();
buttonImage.src = buttonImageUrl;

buttonImage.addEventListener('load', () => {
context.drawImage(buttonImage, 370, 600)});
/*
buttonImage.addEventListener('click', () => { 
});

}
const game = new Game($canvas);
game.drawEverything()
*/
/*
function drawMenu() {
  context.clearRect(0,0,900,700);
  drawBackground();
  drawButton();
}
  */
 




/*
//keyStroke(){
  window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 13: 
      const game = new Game($canvas)
      console.log ('new game')
      game.drawEverything()
      console.log ('draw')
      break;
    }
});
/*
function testAndExecute(elem, event, area, func){
  // area is relative to page :
  var area = {
       x0: 370,
       y0: 200,
       x1: 200,
       y1: 600;
  // }   
  elem.addEventListener(event, function(e){
      var page = {
          x: e.pageX,
          y: e.pageY
      }
      if(page.x >= area.x0 && page.x <= area.x1 && page.y >= area.y0 && page.y <= area.y1){
          func();
      }
  });
}

testAndExecute(
  document.querySelector('canvas'),
  'click',
  {
      x0: 370,
      x1: 200,
      y0: 0,
      y1: 600
  
  },
  function(){
      alert('It worked!');
  }
);
*/
/* 
function drawGrid() {
 
  for (var y = 200; y <= 700; y += 100) {
    context.moveTo(0, y);
    context.lineTo(900, y);
  }
  
  context.strokeStyle = "";
  context.stroke();  
  }


const game = new Game($canvas)
game.drawEverything()
  
*/
/*
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
  
  */
   