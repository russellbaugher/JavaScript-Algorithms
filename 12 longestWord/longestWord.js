function longestWord(str) {
  let filteredArray = str.replace(/[\W_]/g, ' ').split(' '); //regex: !(whiteSpace,digit,underscore) = letters only
  let largest = '';
  filteredArray.forEach((word) => {
      largest = word.length > largest.length ? word : largest;//is index val iter thru longer?
  });

  return largest;
}

console.log(longestWord('Ready, steady, go!'));
console.log(longestWord('Ready[[[, steady, go!'));
console.log(longestWord('ABCd'));
