function amendTheSentence(str) {    //parse out all words where letter Capitalized
  let splitArray = str.split("");   //split into separate char array
  console.log(splitArray); //

  for (let i = 0; i < splitArray.length; i++) {  //iterate all indexes of array
    splitArray[i] !== splitArray[i].toLowerCase() ? splitArray[i] = " " + splitArray[i].toLowerCase() : splitArray[i]; //if capital letter, then ' '
  }
  console.log(splitArray);
  return splitArray.join("");       //remove commas & quotes
}

console.log(amendTheSentence('CodingDogDoesWorkSon'));
console.log(amendTheSentence("HomieDon'tCodeNone"));
