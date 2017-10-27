//分值对象
let gradeObj = function () {
  this.fruitNum = 0;//大鱼体内的果实数量
  this.gradeMultiple = 1;//分数倍数，吃到蓝色果实倍数为2
  this.score = 0;//得分

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
  ctx1.fillText('大鱼体内果实数量：'+this.fruitNum,w/2,h-50);
  ctx1.fillText('分数倍数：'+this.gradeMultiple,w/2,h-100);
  ctx1.fillText('分数：'+this.score,w/2,h-20);
  ctx1.restore();
}
