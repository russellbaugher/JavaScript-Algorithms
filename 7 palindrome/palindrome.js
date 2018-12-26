function isPalindrome(str) {
  let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');      // /g(global,forWholeString), \W(any nonword char), _(including _), replace w/ ''
  let reversedStr = forwardStr.split('').reverse().join('');      //split into array to reverse & rejoin

  return forwardStr === reversedStr;      //true if ===, false if !===
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('My age is0, 0 si ega ym.'));
console.log(isPalindrome('_codegod'));
console.log(isPalindrome('legendary'));
console.log(isPalindrome('.0_0 (: /-\ :) 0-0'));
