function sumAll(numArray) {
  const min = Math.min(...numArray); //spread operator; unwrap array
  /**/console.log(numArray);
  const max = Math.max(...numArray);
  /**/console.log(numArray);
  let sum = 0;

  for (let i = min; i <= max; i++) { //increment from min go to & include max
    sum += i; //combine all iterations (5+6+7+8+9+10)=45
  }
  /**/console.log(sum);
  return sum;
}


console.log(sumAll([10, 5]));
console.log(sumAll([3, 7]));
