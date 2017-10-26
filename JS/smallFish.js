let smallFish = function () {
  this.x;
  this.y;
  this.angle;
  this.smallEye = new Image();
  this.smallBody = new Image();
  this.smallTail = new Image();
}
smallFish.prototype.init = function () {
  this.x = canvasWidth * 0.5;
  this.y = canvasHeight * 0.5;
  this.angle = 0;
  this.smallEye.src = './IMG/babyEye0.png';
  this.smallBody.src = './IMG/babyFade0.png';
  this.smallTail.src = './IMG/babyTail0.png';
}
smallFish.prototype.draw = function () {
  //让小鱼的身体随着大鱼移动
  this.x = lerpDistance(fishMom.x,this.x,0.99);
  this.y = lerpDistance(fishMom.y,this.y,0.99);

  let deteX = fishMom.x - this.x;
  let deteY = fishMom.y - this.y;
  let dete = Math.atan2(deteY,deteX)+ Math.PI;
  this.angle = lerpAngle(dete,this.angle,0.6) ;//让小鱼的角度随着大鱼的的角度变化
  ctx1.save();
  ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle);
  ctx1.drawImage(this.smallEye,-this.smallEye.width/2,-this.smallEye.height/2)
  ctx1.drawImage(this.smallBody,-this.smallBody.width/2,-this.smallBody.height/2)
  ctx1.drawImage(this.smallTail,-this.smallTail.width/2+22,-this.smallTail.height/2)
  ctx1.restore();
}