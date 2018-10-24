/**
 * (c) 2018 Hendrik Roehm
 * Lattice uses a canvas to show operations of ZS3 on the lattice
 * 
 * Canvas has to contain the canvas reference to draw into
 * Objects can be provided through options.
 * Available options:
 *   gap: Distance between points
 *   animationSpeed: speed of the transformation animation
 */

import Point from "./point.js";

export default function Lattice(canvas, options) {
  this.transitionProgress = 1;
  options = options || {};
  var context = canvas.getContext('2d');            
  var width = canvas.width;
  var height = canvas.height;
  // to be centered in the canvas, the shift seems to be needed
  var center = {
    x: width / 2,
    y: height / 2
  };
  var gap = options.gap ? options.gap : 20;
  var pointsPerDirection = "pointsPerDirection" in options
    ? options.pointsPerDirection
    : parseInt(Math.max(width, height) / gap)+3;
  if (pointsPerDirection % 2 == 1) {
    pointsPerDirection += 1;
  }
  var animationSpeed = "animationSpeed" in options ? options.animationSpeed : 1;
  var points = [];
  var basis = {
    e: [1, 0, 0, 1],
    t: [-1/2, Math.sqrt(3)/2, -Math.sqrt(3)/2, -1/2],
    tt: [-1/2, -Math.sqrt(3)/2, Math.sqrt(3)/2, -1/2],
    s: [-1, 0, 0, 1],
    st: [1/2, -Math.sqrt(3)/2, -Math.sqrt(3)/2, -1/2],
    stt: [1/2, Math.sqrt(3)/2, Math.sqrt(3)/2, -1/2]
  };
  var triangle = [];

  var requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame;

  function initializePoints() {
    points = [];
    triangle = [];
    for (var i=-pointsPerDirection/2; i<pointsPerDirection/2; i++) {
      for (var j=-pointsPerDirection/2; j<pointsPerDirection/2; j++) {
        var point = getInitializedPoint(i, j);
        points.push(point);
      }
    }

    function getInitializedPoint(i, j) {
      var x = (i+(j % 2)/2)*gap + center.x;
      var y = Math.sqrt(3)/2*j*gap + center.y;
      var point = new Point(x, y);
      var isCenter = i == 0 && j == 0;
      point.setSize(isCenter ? 6 : 4);

      if (j == -2 && i == 0) {
        point.setFillStyle("red");
        triangle.push(point);
      } else if (j == 1 && i == -2) {
        point.setFillStyle("green");
        triangle.push(point);
      } else if (j == 1 && i == 1) {
        point.setFillStyle("blue");
        triangle.push(point);
      }
      return point;
    }
  }

  // transforms points without animation or redraw
  function transformWith(matrix) {
    points.forEach(function (point) {
      point.transformWithMatrixAroundCenter(matrix, center);
    })
  }

  // transforms coefficients of basis into operation matrix
  function matrixFrom(coeff) {
    var op = [];
    for (var i=0; i<4; i++) {
      var number = 0;
      Object.keys(basis).forEach(function (b) {
        number += coeff[b] ? coeff[b] * basis[b][i] : 0;
      })
      op.push(number);
    }
    return op;
  }
  
  // renders the points onto the canvas
  this.render = function() {
    var transitionProgress = this.transitionProgress;

    // draw background
    context.beginPath();
    context.rect(0, 0, width, height);
    context.fillStyle = "white";
    context.fill();

    // draw edges
    var firstEdge = true;
    context.beginPath();
    triangle.forEach(function (point) {
      var coordinates = point.coordinatesDuringTransition();
      if (firstEdge) {
        context.moveTo(coordinates.x, coordinates.y);
        firstEdge = false;
      } else {
        context.lineTo(coordinates.x, coordinates.y);
      }
    });
    context.closePath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.stroke();

    // draw points
    points.forEach(function (point) {
      point.setTransitionProgress(transitionProgress);
      point.drawOnContext(context);
    });
  }

  this.setTransitionProgress = function(transitionProgress) {
    this.transitionProgress = transitionProgress;
  }

  // operates on lattice with coeff
  // options: duration
  this.operateWith = function(coeff, options) {
    transformWith(matrixFrom(coeff));
  }

  this.reset = function() {
    initializePoints();
    this.transitionProgress = 1;
    this.render();
  }

  // initialization
  this.reset();
}
