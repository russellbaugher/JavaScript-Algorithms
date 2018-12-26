function firstDuplicate(numArray) {
  let duplicateObject = {};

    for (let num of numArray) {
      if (duplicateObject.hasOwnProperty(num)) { //if num exists return num
        return num;
      }
      duplicateObject[num] = num;
    }

    return -1; //use case no duplicate value
}


console.log(firstDuplicate([2,3,3,1,5,2]));
console.log(firstDuplicate([2,2]));
console.log(firstDuplicate([2,1,3]));
