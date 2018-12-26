function differenceArray(arr1, arr2) {
  let uniqueArray = [];   //start off as initial value

  for (let val of arr1) {
    if (!arr2.includes(val) && !uniqueArray.includes(val)) { //find out if val w/in array && only one instance of unique value
      uniqueArray.push(val);
    }
  }

  for (let val of arr2) {
    if (!arr1.includes(val) && !uniqueArray.includes(val)) { //find out if val w/in array && only one instance of unique value
      uniqueArray.push(val);
    }
  }
  return uniqueArray;
}

console.log(differenceArray([1,2,3,5],[1,2,3,4,5]));
console.log(differenceArray([1, "calf", 3, "piglet" ,3], [7, "filly"]));
console.log(differenceArray([2,1,3], [3,2,1]));
