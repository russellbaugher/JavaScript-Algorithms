// function isDigit(str) {
//   const digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//
//   return digitArray.includes(str);
// }
//
// console.log(isDigit('1'));
// console.log(isDigit('3'));
// console.log(isDigit('d'));

///////////////////////////////////////////////
// function isDigit2(x) {
//   return Number.isInteger(x)
// };
// console.log(isDigit2('2'));
// console.log(isDigit2('d'));

//////////////////////////////////////////////
function isDigit3(str) {
  if(typeof str === 'number') {
    return true
  } else {
    return false
  }
};
console.log(isDigit3('2'));
console.log(isDigit3('d'));
