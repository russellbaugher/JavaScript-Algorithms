function missingNumber(numArr) {
  const numberArray = numArr.sort((num1, num2) => { //sort array
    return num1 - num2;
  });

  for ( let i = 0; i < numberArray.length; i++ ) { //iterate
    if ( i !== numberArray[i]) {  //match arrays   //if array missing number,
      return i;                   //return missing number
    }
  }

}

console.log(missingNumber([0,3,5,8,4,6,1,9,7]));
console.log(missingNumber([1,2,5,0,6,7,9,3,4]));
