//定义海葵对象类
let actiniaObj = function () {
  //x轴和高度
  this.x = []
  this.len = []
}
actiniaObj.prototype.num = 50//海葵数量
//初始化
actiniaObj.prototype.init = function () {
  //初始化每个海葵
  for(let i = 0;i<this.num;i++){
    this.x[i] = i * 16 + Math.random()*20;
    this.len[i] = 200+Math.random()*50;
  }

}
//绘制
actiniaObj.prototype.draw = function () {
  ctx2.save();

  ctx2.strokeStyle = '#3b154e';
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round';
  ctx2.globalAlpha = 0.5;
  for(let i = 0;i<this.num;i++){
   //beginPath->moveTo->lineTo->strokeStyle->lineWidth->stroke->lineCap->globalAlpha(全局透明度)
    ctx2.beginPath();
    ctx2.moveTo(this.x[i],canvasHeight);
    ctx2.lineTo(this.x[i],canvasHeight-this.len[i]);
    ctx2.stroke();
  }
  ctx2.restore();   //save和restore之前的样式只在这两者之间起作用
}




