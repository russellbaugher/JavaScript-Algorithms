// if (dirty version)
// function longestWordLength(str) {
//   let longestLength = 0;
//   let strArray = str.split(' ');     //split str into array
//
//   for( let i = 0; i < strArray.length; i++) {
//     if (longestLength < strArray[i].length) {      //if  strArray > 0, it is longestLength
//         longestLength = strArray[i].length;
//      }
//
//   return longestLength;
// }
//
// console.log(longestWordLength('I am a coding dog'));
// console.log(longestWordLength('I would like to work for Google'));
// console.log(longestWordLength("Ain't no fun if the homie don't code none"));

////////////////////////////////////////////////////////////////////////////////
//TERNARY (cleaner)
// function longestWordLength(str) {
//   let longestLength = 0;
//   let strArray = str.split(' ');      //split str into array
//
//   strArray.forEach(word => {      //calls a provided function once for each element in an array
//     console.log(word);
//     longestLength = longestLength < word.length ? word.length : longestLength;      //if  strArray > 0, it is longest length
//   });
//
//   return longestLength;
// }
//
// console.log(longestWordLength('I am a coding dog'));
// console.log(longestWordLength('I would like to work for Google'));
// console.log(longestWordLength("Ain't no fun if the homie don't code none"));

////////////////////////////////////////////////////////////////////////////////
//SORT (dirty)
function longestWordLength2(str) {
  let longestLength = 0;
  let strArray = str.split(" ");     //split str convert into array of words

  strArray = strArray.sort((word1, word2) => {        //?would cause problem on numbers > 9 bc seen as string 9>10?
    //return word2.length - word1.length;      //(-)increment so start with longest ([0]) compare two & put longest first
    return word1.length < word2.length;     //returns longest[0] to shortest[~9]
  });

  //return strArray;
  return strArray[0].length;
}

console.log(longestWordLength2('I am a coding dog'));
console.log(longestWordLength2('I would like to work for Google'));
console.log(longestWordLength2("Ain't no fun if the homie don't code none"));

////////////////////////////////////////////////////////////////////////////////
//SORT (cleaner: chain split,sort methods, eliminate a let)
// function longestWordLength2(str) {
//   let longestLength = str.split(" ").sort((word1, word2) => {
//     return word2.length - word1.length; //sort highest lengths to lowest lengths
//   })[0].length; //grab first one and return length below
//
//   return longestLength;
//
// }
//
// console.log(longestWordLength2('I am a coding dog'));
// console.log(longestWordLength2('I would like to work for Google'));
// console.log(longestWordLength2("Ain't no fun if the homie don't code none"));
