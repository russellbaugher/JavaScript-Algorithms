function longestWordLength(str) {
  let longestLength = 0;
  let strArray = str.split(' '); //split str into array

  for( let i = 0; i < strArray.length; i++) {
    if(longestLength < strArray[i].length) {
       longestLength = strArray[i].length;
     }

  return longestLength;
}

console.log(longestWordLength('I am a coding dog'));
console.log(longestWordLength('I would like to work for Google'));
console.log(longestWordLength("Ain't no fun if the homie don't code none"));
