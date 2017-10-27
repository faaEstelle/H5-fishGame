//分值对象
let gradeObj = function () {
  this.fruitNum = 0;//大鱼体内的果实数量
  this.gradeMultiple = 1;//分数倍数，吃到蓝色果实倍数为2
  this.score = 0;//得分
  this.gameOver = false;//游戏状态
  this.overAlpha = 0;
}
//当大鱼喂给小鱼果实时重置果实数量和分数倍数
gradeObj.prototype.reset = function () {
  this.fruitNum = 0;
  this.gradeMultiple = 1;
}
gradeObj.prototype.draw = function () {

  let h = can1.height;
  let w = can1.width;
  ctx1.save();
  ctx1.fillStyle = 'white';
  ctx1.shadowBlur = 20;
  ctx1.shadowColor = '#fff'
  ctx1.fillText('SCORE：'+this.score,w/2,h-20);
  if (this.gameOver){
    this.overAlpha += deltaTime*0.001;
    console.log(this.overAlpha)
    if(this.overAlpha >= 1) this.overAlpha = 1;
    ctx1.fillStyle = 'rgba(255,255,255,'+ this.overAlpha +')'
    ctx1.fillText('GAMEOVER',w/2,h/2);
    ctx1.fillText('SCORE：'+this.score,w/2,h/2-50);
  }
  ctx1.restore();
}
