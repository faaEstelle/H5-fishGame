let can1 ;
let can2 ;

let ctx1 ;
let ctx2 ;

//画布的宽高
let canvasHeight;
let canvasWidth;

let lastTime;
let deltaTime;//每两帧之间的时间间隔

//鼠标位置变量
let mX;
let mY;

//实例类
let ane;
let fruit;
let fishMom;
let fishBaby;

let picBg = new Image();//定义背景图片变量
//将document中的body加载完后执行某个函数（game），作为主入口
document.body.onload = game;
function game () {
  init();
  lastTime = new Date();
  deltaTime = 0;
  gameLoop();
}

function init () {
  //前一层
  can1 = document.getElementById('canvas1');
  ctx1 = can1.getContext( '2d');

  //后一层
  can2 = document.getElementById('canvas2')
  ctx2 = can2.getContext( '2d');

  //对画布1添加鼠标监听事件
  can1.addEventListener('mousemove',onMouseMove,false);
  //初始化时加载背景图片（路径问题）
  picBg.src='./IMG/background.jpg'

  canvasHeight = ctx1.canvas.height;
  canvasWidth = ctx1.canvas.width;

  //新建海葵对象
  ane = new actiniaObj();
  ane.init();//海葵初始化
  fruit = new fruitObj();
  fruit.init();
  fishMom = new bigFish();
  fishMom.init();
  fishBaby = new smallFish();
  fishBaby.init();
  //初始化鼠标位置
  mX = canvasWidth/2;
  mY = canvasHeight/2;
}

function gameLoop () {
  window.requestAnimationFrame(gameLoop);
  let now = new Date();
  deltaTime = now - lastTime;
  if(deltaTime>40) deltaTime = 40;//防止在离开当前页面之后帧间隔太大
  lastTime = now;

  drawAllBg();
  ane.draw();

  fruitMonitor()
  fruit.draw();

  ctx1.clearRect(0,0,canvasWidth,canvasHeight);//每次循环时清除画布1的内容
  fishMom.draw();
  //大鱼吃果实
  fishFruitCollide();

  fishBaby.draw();
}
function onMouseMove (e) {
  if (e.offsetX || e.layerX){
    mX = e.offsetX ? e.offsetX : e.layerX;
    mY = e.offsetY ? e.offsetY : e.layerY;
  }
}