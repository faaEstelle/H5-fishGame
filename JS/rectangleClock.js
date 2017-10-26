let domB = document.getElementById('rectangleClock');
let ctxB = domB.getContext('2d');
let widthB = ctxB.canvas.width;
let heightB = ctxB.canvas.height;
let wrem = widthB/300;
let hrem = heightB/500;

function drawBackground () {
  ctxB.save();
  ctxB.beginPath();
  ctxB.fillStyle='#000'
  ctxB.lineWidth=10
  ctxB.moveTo(10,10);
  ctxB.lineTo(10,290);
  ctxB.lineTo(490,290);
  ctxB.lineTo(490,10);
  ctxB.lineTo(10,10)
  ctxB.stroke();

  ctxB.beginPath();
  ctxB.fillStyle='#000'
  ctxB.lineWidth=10
  ctxB.moveTo(30,30);
  ctxB.lineTo(30,270);
  ctxB.lineTo(470,270);
  ctxB.lineTo(470,30);
  ctxB.lineTo(30,30)
  ctxB.stroke();
}

function fillTime (hour,minute,second) {
  ctxB.beginPath();
  ctxB.font='36px Minikin'
  ctxB.textAlign='center'
  ctxB.textBaseline='middle'
  ctxB.fillText(hour+':'+minute+':'+second,250,150)
}

function drawClock () {
  ctxB.clearRect(0,0,widthB,heightB)
  drawBackground()
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  fillTime (hour,minute,second)
  ctxB.restore()
}
setInterval(drawClock,1000)

