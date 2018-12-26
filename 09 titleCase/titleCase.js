function titleCase(str) {
  let titleCaseSentenced = str.split(' ');      //split string into array of strings
          /**/console.log(titleCaseSentenced);

  titleCaseSentenced = titleCaseSentenced.map((word) => { //map a new array
    const firstLetter = word.charAt(0).toUpperCase();       //initialize const that is 1st single UPPER char
          /**/console.log(titleCaseSentenced);

    word = firstLetter.concat(word.slice(1, word.length));      //concat w all letters except first letter

    return word;
  });

  /**/console.log(titleCaseSentenced);
  titleCaseSentenced = titleCaseSentenced.join(' ');      //remove quotes & commas
          /**/console.log(titleCaseSentenced);

  return titleCaseSentenced;
}

console.log(titleCase('I am a coding dog'));
//console.log(titleCase('I would like to work for Google'));
