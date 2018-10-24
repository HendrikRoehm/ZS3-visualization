
function LatticeAnimator(lattice) {
  this.lattice = lattice;
  this.animationSpeed = 1;
  this.transitionProgress = 1;
  this.animationStartTime = null;
}

LatticeAnimator.prototype.animate = function() {
  this.initializeAnimation();
  this.triggerAnimationFrame();
}

LatticeAnimator.prototype.initializeAnimation = function() {
  this.animationStartTime = Date.now();
  this.transitionProgress = 0;
}

LatticeAnimator.prototype.triggerAnimationFrame = function() {
  var elapsedTimeInSeconds = (Date.now() - this.animationStartTime) / 1000;
  var transitionProgress = Math.min(1, this.animationSpeed*elapsedTimeInSeconds);
  this.lattice.setTransitionProgress(transitionProgress);
  this.lattice.render();
  if (transitionProgress < 1) {
    requestAnimationFrame(this.triggerAnimationFrame.bind(this));
  }
}

export default LatticeAnimator;
