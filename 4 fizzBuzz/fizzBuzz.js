//if, else if, else , return
function fizzBuzz(num) {
  if ( num % 3 === 0 && num % 5 === 0 ) {     //divisible by 3&&5 returns 'fizzbuzz'
    return 'fizzbuzz';
  }
  else if ( num % 3 === 0 ) {     //divisible by 3 returns 'fizz'
    return 'fizz';
  }
  else if ( num % 5 === 0 ) {   //divisible by 5 returns 'buzz'
    return 'buzz';
  }
  // else (      //else conditional statement is optional  //!divisible by 3,5 returns ''
    return '';
  // )
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(10));
console.log(fizzBuzz(8));

///////////////////////////////////////////////////////////////////////////////////////
//if, if , string concat
function fizzBuzz2(num) {
  let word = '';      //set init val of word to ''

  if ( num % 3 === 0 ) {
    word = word.concat('fizz');     //divisible by 3 concats ''+'fizz'
  }

  if ( num % 5 === 0 ) {
    word = word.concat('buzz');     //divisible by 5 concats ''+'buzz'
  }
                                    //divisible by 3&&5 concats 'fizz' first then 'buzz'
  return word;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(8));
