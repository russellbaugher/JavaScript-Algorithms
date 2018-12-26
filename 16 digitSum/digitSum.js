function sumUpNumbers(str) {
  const nums = str.match(/\d+/g) || []; //take all digits as long as they extend entire str & return as array //const bc not going to mutate/change arr , [] allow strings w/out nums to be summed up to 0
  let sum = 0; //will iterate/reassign value later

  nums.forEach((num) => {  //take in el called num
    sum += Number(num);
  });
  return sum;

console.log(sumUpNumbers('2 apples, 12 oranges'));
console.log(sumUpNumbers('123450'));
console.log(sumUpNumbers('your payment method is invalid'));
