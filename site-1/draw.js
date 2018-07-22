function drawCanvas() {
  var canvas = document.querySelector('canvas');
  var div = document.querySelector('div');
  var context = canvas.getContext('2d');

  // Variables to play with
  context.lineWidth = 8;
  var squareSize = 80;
  var randomDisplacement = 15;
  var rotateMultiplier = 20;

  // Width of the canvas should be the width of the page
  var widthSize = document.body.clientWidth;
  // Height of the canvas should be the height of the div
  // plus some extra room to breathe. 
  var heightSize = div.clientHeight + 200;

  canvas.width = widthSize;
  canvas.height = heightSize;

  // Draw the square
  function draw(width, height) {
    context.beginPath();
    context.rect(-width / 2, -height / 2, width, height);
    context.stroke();
  }

  // Loop and draw the squares!
  for (var i = squareSize; i <= widthSize - squareSize; i += squareSize) {
    for (var j = squareSize; j <= heightSize - squareSize; j += squareSize) {
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var rotateAmt = j / widthSize * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;

      plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var translateAmt = j / heightSize * plusOrMinus * Math.random() * randomDisplacement;

      context.save();
      context.translate(i + translateAmt, j)
      context.rotate(rotateAmt);
      draw(squareSize, squareSize);
      context.restore();
    }
  }
}