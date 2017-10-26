let bigFish = function () {
  this.x;
  this.y;
  this.bigEye = new Image();
  this.bigBody = new Image();
  this.bigTail = new Image();
  //角度
  this.angle ;
}
bigFish.prototype.init = function () {
  this.x = canvasWidth * 0.5;
  this.y = canvasHeight * 0.5;
  this.bigEye.src = './IMG/bigEye0.png';
  this.bigBody.src = './IMG/bigSwim0.png';
  this.bigTail.src = './IMG/bigTail0.png';

  this.angle = 0;
}
bigFish.prototype.draw = function () {

  //让大鱼的身体随着鼠标移动
  this.x = lerpDistance(mX,this.x,0.99);
  this.y = lerpDistance(mY,this.y,0.99);

  //求极坐标
  let deteX = mX - this.x;
  let deteY = mY - this.y;
  let dete = Math.atan2(deteY,deteX)+ Math.PI;//鼠标的极坐标(加上PI的原因是atan2的取值范围为-PI ~ PI)
  this.angle = lerpAngle(dete,this.angle,0.6) ;//让鱼的角度随着鼠标的的角度变化

  ctx1.save();
  ctx1.translate(this.x,this.y);//设置画布1对大鱼的原点
  ctx1.rotate(this.angle);//旋转
  ctx1.drawImage(this.bigEye,-this.bigEye.width/2,-this.bigEye.height/2);
  ctx1.drawImage(this.bigBody,-this.bigBody.width/2,-this.bigBody.height/2);
  ctx1.drawImage(this.bigTail,-this.bigTail.width/2+30,-this.bigTail.height/2);
  ctx1.restore();

}