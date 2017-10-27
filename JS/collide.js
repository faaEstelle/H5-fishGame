//判断大鱼和果实的距离
function fishFruitCollide () {
  for (let i = 0;i<fruit.num;i++){
    if (fruit.alive[i]){
      let l = calLength2(fruit.x[i],fruit.y[i],fishMom.x,fishMom.y)
      if (l < 900){
        //当大鱼于果实的距离很近时，表示果实被吃掉
        fruit.dead(i);
        //大鱼身体的颜色深浅跟所吃果实的数目相关
        fishMom.BigBodyCount ++;
        if (fishMom.BigBodyCount >= 7) fishMom.BigBodyCount = 7;
        //当为蓝色果实时倍数为2
        if (fruit.type[i] === 'blue'){
          gradeData.gradeMultiple = 2;
        }else{
          gradeData.gradeMultiple = 1;
        }
        gradeData.score += 10*gradeData.gradeMultiple;
        gradeData.fruitNum ++;
      }
    }
  }
}
//判断大鱼和小鱼的距离
function MomBabyCollide () {
  let l = calLength2(fishMom.x,fishMom.y,fishBaby.x,fishBaby.y);
  if (l <900){
    //当大鱼触碰到小鱼时表示大鱼将食物为给小鱼，(大鱼体内果实数量大于0)
    // 小鱼满血复活(身体图片恢复到初始状态帧),
    // 大鱼的果实归零状态恢复到初始
    if (gradeData.fruitNum > 0){
      fishBaby.babyBodyCount = 0;
    }
    fishMom.BigBodyCount = 0;
    gradeData.reset();
  }
}