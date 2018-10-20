
var Point = function (x, y) {
  this.lastCoordinates = {
    x: x,
    y: y
  }
  this.currentCoordinates = {
    x: x,
    y: y
  }
  this.size = 1;
  this.fillStyle = "black";
  this.transitionRatio = 1;
}

Point.prototype.setTransitionRatio = function (transitionRatio) {
  this.transitionRatio = transitionRatio;
}

Point.prototype.setFillStyle = function (fillStyle) {
  this.fillStyle = fillStyle;
}

Point.prototype.setSize = function (size) {
  this.size = size;
}

Point.prototype.coordinatesDuringTransition = function () {
  return {
    x: this.transitionRatio*this.currentCoordinates.x
      + (1-this.transitionRatio)*this.lastCoordinates.x,
    y: this.transitionRatio*this.currentCoordinates.y
      + (1-this.transitionRatio)*this.lastCoordinates.y
  };
}

Point.prototype.transformWithMatrixAroundCenter = function (matrix, center) {
  var a11 = matrix[0];
  var a12 = matrix[1];
  var a21 = matrix[2];
  var a22 = matrix[3];
  var newCoordinates = {
    x: a11*(this.currentCoordinates.x-center.x)
      + a21 * (this.currentCoordinates.y-center.y) + center.x,
    y: a12*(this.currentCoordinates.x-center.x)
      + a22 * (this.currentCoordinates.y-center.y) + center.y
  }
  this.lastCoordinates = this.currentCoordinates;
  this.currentCoordinates = newCoordinates;
}

Point.prototype.drawOnContext = function(context) {
  var coordinates = this.coordinatesDuringTransition();
  context.beginPath();
  context.arc(coordinates.x, coordinates.y, this.size, 0, 2 * Math.PI, false);
  context.fillStyle = this.fillStyle;
  context.fill();
}

export default Point;
