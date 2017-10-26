//判断大鱼和果实的距离
function fishFruitCollide () {
  for (let i = 0;i<fruit.num;i++){
    if (fruit.alive[i]){
      var l = calLength2(fruit.x[i],fruit.y[i],fishMom.x,fishMom.y)
      if (l < 900){
        //当大鱼于果实的距离很近时，表示果实被吃掉
        fruit.dead(i);
      }
    }
  }
}