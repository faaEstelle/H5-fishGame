let bigFish = function () {
  this.x;
  this.y;
  this.bigEye = new Image();
  this.bigBody = new Image();
  this.bigTail = new Image();
  //角度
  this.angle ;

  this.bigTailTimer = 0;
  this.bigTailCount = 0;
  this.bigEyeTimer = 0;
  this.bigEyeCount = 0;
  this.bigEyeSeteval = 1000;

  this.bigBodyTimer = 0;
  this.BigBodyCount = 0;//当前帧数
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
  //尾巴晃动
  this.bigTailTimer += deltaTime;
  if (this.bigTailTimer > 50){
    this.bigTailCount =(this.bigTailCount + 1)%8;
    this.bigTailTimer %= 50;
  }
  //眨眼
  this.bigEyeTimer += deltaTime;
  if (this.bigEyeTimer > this.bigEyeSeteval){
    this.bigEyeCount = (this.bigEyeCount + 1)%2;
    this.bigEyeTimer %= this.bigEyeSeteval;
    if (this.bigEyeCount === 1){
      this.bigEyeSeteval = 200;
    }else {
      this.bigEyeSeteval = Math.random()*2000+1500;
    }
  }
  let bigTailCount = this.bigTailCount;
  let bigEyeCount = this.bigEyeCount;
  let bigBodyCount = this.BigBodyCount;
  ctx1.save();
  ctx1.translate(this.x,this.y);//设置画布1对大鱼的原点
  ctx1.rotate(this.angle);//旋转
  //身体颜色跟果实颜色有关
  if(gradeData.gradeMultiple === 2){
    ctx1.drawImage(MomFadeBlue[bigBodyCount],-MomFadeBlue[bigBodyCount].width/2,-MomFadeBlue[bigBodyCount].height/2);
  }else {
    ctx1.drawImage(MomFadeOrange[bigBodyCount],-MomFadeOrange[bigBodyCount].width/2,-MomFadeOrange[bigBodyCount].height/2);
  }
  ctx1.drawImage(MomEye[bigEyeCount],-MomEye[bigEyeCount].width/2,-MomEye[bigEyeCount].height/2);
  ctx1.drawImage(MomTail[bigTailCount],-MomTail[bigTailCount].width/2+30,-MomTail[bigTailCount].height/2);
  ctx1.restore();

}