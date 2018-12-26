//1// unchained methods, verbose
function reverseString(word) {
  let reversedWord = word.split('');      //split up reverseString's parameter into array
  /**/ console.log(reversedWord); /**/
  reversedWord = reversedWord.reverse();      //reverse array
  /**/ console.log(reversedWord);
  reversedWord = reversedWord.join('');     //convert array to string
  /**/ console.log(reversedWord);

  return reversedWord;
}

console.log(reverseString('codedog'));
console.log(reverseString('javascript'));


// ------------------------------------------------------------------
2// chained methods, 3 iterations
function reverseString2(word) {
  let reversedWord = word.split('').reverse().join(''); //split,reverse,convert
  /**/console.log(reversedWord);

  return reversedWord;
}

console.log(reverseString2('codegod'));
console.log(reverseString2('javascript'));


//----------------------------------------------------------------
//3// for loop, 1 iteration, back to front of array
function reverseString3(word) {
  let reversedWord = '';

  for (let i = word.length - 1; //length always 1 larger than index
          i >= 0; //want i to run until 0 index
          i--) //iterate from end to beginning
  {
    reversedWord += word[i]; //concat letters backwards
  }

  return reversedWord;
}

console.log(reverseString3('codegod'));
console.log(reverseString3('javascript'));
