function addTwoDigits(num) {
  let numArray = num.toString();
  /**/console.log(numArray);
  numArray = numArray.split('') //break up into individual digits
  numArray = numArray.reduce((num1, num2) => parseInt(num1) + parseInt(num2)); //reduce takes in callback function
  /**/console.log(numArray);
  return numArray;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(48));

///////////////////////////////////////////////////////////////////////////////
//CHAIN more concise
function addTwoDigits2(num) {
  return num.toString().split('').reduce((num1, num2) => parseInt(num1) + parseInt(num2)); //split on each char, reduce to single val
}

console.log(addTwoDigits2(29));
console.log(addTwoDigits2(48));
