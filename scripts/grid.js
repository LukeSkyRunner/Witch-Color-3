

function drawGrid() {
  
  for (var x = 0; x <= 500; x += 50) {
    context.moveTo(x, 0);
    context.lineTo(x, 500);
  }
  
  for (var y = 0; y <= 500; y += 50) {
    context.moveTo(0, y);
    context.lineTo(500, y);
  }
  
  context.strokeStyle = "";
  context.stroke();  
  }