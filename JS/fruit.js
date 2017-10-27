let fruitObj = function () {
  this.alive = [];//每个果实的状态（布尔）数组
  this.x = [];
  this.y = [];
  this.l = [];//果实不断长大的变量
  this.speeds = [];//果实生长及上升的速度
  this.type = [];//果实的颜色类型
  this.orange = new Image();
  this.blue = new Image();
}
fruitObj.prototype.num = 30
//初始化
fruitObj.prototype.init = function () {
  for(let i = 0;i<30;i++){
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    let type = Math.random();
    if (type <0.3){
      this.type[i] = 'blue'
    }else{
      this.type[i] = 'orange'
    }

    this.speeds[i] = Math.random()*0.017+0.003;//将速度设置在0.003~0.02之间
    this.born(i)
  }
  this.orange.src = './IMG/fruit.png';
  this.blue.src = './IMG/blue.png';
}
//绘制
fruitObj.prototype.draw = function () {
  for (let i = 0;i<this.num;i++){
    //draw
    //find one -> grow up -> fly up
    if (this.alive[i]){
      //设置果实的最大值为10，当达到最大值时，向上飞
      if (this.l[i] < 14){
        this.l[i]+=this.speeds[i]*deltaTime;
      }else {
        // this.l[i] =14
        this.y[i] -=this.speeds[i]*5*deltaTime;
      }
      if (this.type[i] === 'blue'){
        //绘制果实，每个果实绘制的中心点实际应该为果实坐标减去宽高的一半
        ctx2.drawImage(this.blue,this.x[i]-this.l[i]/2,this.y[i]-this.l[i]/2,this.l[i],this.l[i]);
      }else if(this.type[i]==='orange'){
        //绘制果实，每个果实绘制的中心点实际应该为果实坐标减去宽高的一半
        ctx2.drawImage(this.orange,this.x[i]-this.l[i]/2,this.y[i]-this.l[i]/2,this.l[i],this.l[i]);
      }
      //当快到达顶端时将果实的存活状态还原
      if (this.y[i]<10){
        this.alive[i]=false;
      }
    }
  }
}
//某个随机的海葵添加生出果实
fruitObj.prototype.born = function (i) {
  //获得某个随机的海葵
  let aneId = Math.floor(Math.random()*ane.num)
  //通过海葵得到果实出生的坐标值
  this.x[i] = ane.x[aneId]
  this.y[i] = canvasHeight - ane.len[aneId]
  this.l[i] = 0;//出生时大小为0
  this.alive[i]=true
}
//当果实的死亡（被鱼吃掉）
fruitObj.prototype.dead = function (i) {
  this.alive[i] = false
}
//游戏规则，保证屏幕中有一定数量的果实
function fruitMonitor () {
  let count = 0;
  for(let i = 0;i<fruit.num;i++){
    if (fruit.alive[i]) count++
  }
  if (count<15){
    //当数量少于规定数量15个时，让一个果实出生
    sendFruit();
    return;

  }
}
//让果实出生
function sendFruit () {
  for (let i=0;i<fruit.num;i++){
    if (!fruit.alive[i]){
      fruit.born(i)
      return;
    }
  }
}



