function drawnSquare(axisX, axisY, colour) {
  var screen = document.querySelector("canvas");
  var brush = screen.getContext("2d");

  brush.fillStyle = colour;
  brush.fillRect(axisX, axisY, 50, 50);

  brush.fillStroke = colour;
  brush.strokeRect(axisX, axisY, 50, 50);
}
