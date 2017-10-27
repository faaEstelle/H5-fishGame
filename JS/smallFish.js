let smallFish = function () {
  this.x;
  this.y;
  this.angle;
  this.smallEye = new Image();
  this.smallBody = new Image();
  this.smallTail = new Image();

  this.babyTailTimer = 0;//尾巴摆动计时器
  this.babyTailCount = 0;//当前执行的帧数
  this.babyEyeTimer = 0;
  this.babyEyeCount = 0;
  this.babyEyeInterval = 1000;//当前眼睛图片持续的时间
  this.babyBodyTimer = 0;
  this.babyBodyCount = 0;

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

  //当计时器大于50毫秒时切换下一帧（即尾巴摆动每一帧的时间间隔）
  this.babyTailTimer += deltaTime;
  if (this.babyTailTimer > 50){
    this.babyTailCount = (this.babyTailCount + 1)%8;//控制帧数在0到7之间
    this.babyTailTimer %= 50;//还原计数器
  }

  this.babyEyeTimer += deltaTime;
  if (this.babyEyeTimer > this.babyEyeInterval){
    this.babyEyeCount = (this.babyEyeCount +1)%2;
    this.babyEyeTimer %= this.babyEyeInterval

    if (this.babyEyeCount === 1 ){
      this.babyEyeInterval = 200;

    }else {
      this.babyEyeInterval = Math.random()*2500 + 1000;//当眼睛状态为图片0时，持续时间为3.5s~2s
    }
  }

  this.babyBodyTimer += deltaTime;
  if (this.babyBodyTimer > 300){
    this.babyBodyCount +=  1;
    if (this.babyBodyCount >= 20){
      //gameover
      this.babyBodyCount = 19;
    }
    this.babyBodyTimer = 50;//还原计数器
  }

  let babyTailCount = this.babyTailCount;
  let babyEyeCount = this.babyEyeCount;
  let babyBodyCount = this.babyBodyCount;

  ctx1.save();
  ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle);
  ctx1.drawImage(babyFade[babyBodyCount],-babyFade[babyBodyCount].width/2,-babyFade[babyBodyCount].height/2);
  ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width/2,-babyEye[babyEyeCount].height/2);
  ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width/2+22,-babyTail[babyTailCount].height/2);
  ctx1.restore();
}