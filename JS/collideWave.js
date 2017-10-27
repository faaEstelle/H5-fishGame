let waveObj = function () {
  this.alive = [];
  this.x = [];
  this.y = [];
  this.r = [];//半径
  this.color = [];//颜色
}
waveObj.prototype.num = 10;
waveObj.prototype.init = function () {
  for (let i =0; i <this.num;i++){
    this.alive[i] = false;
    this.r[i] = 0;
  }
}
waveObj.prototype.draw = function () {
  for (let i =0; i <this.num;i++){
   if (this.alive[i]){
      //draw wave
     this.r[i] += deltaTime * 0.05
     ctx1.save();
     ctx1.beginPath();
     ctx1.lineWidth = 2;
     ctx1.shadowBlur = 10;
     ctx1.shadowColor = '#fff'
     let alpha =1 - this.r[i]/60;
     if (this.r[i] >= 60){
       alpha = 0;
       this.alive[i] = false;
       break;//不进行绘制
     }
     ctx1.strokeStyle = 'rgba('+this.color[i]+','+alpha +')'
     ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
     ctx1.closePath();
     ctx1.stroke();
     ctx1.restore();
   }
  }
}
waveObj.prototype.born = function (x,y,color) {
  for (let i =0; i <this.num;i++){
    if (!this.alive[i]){
      //将状态激活
      this.alive[i] = true;
      this.x[i] = x;
      this.y[i] = y;
      this.color[i] = color;
      this.r[i] = 10;
      return;//激活一个之后跳出循环
    }
  }
}