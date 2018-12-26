function isValidTime(time) {
  let timeArray = time.split(':') //split on colon -> [hour,min]

  if (Number(timeArray[0]) > 23) { //look at as num, not str
    return false;                             //hour>23 ! valid
  } else if (Number(timeArray[1]) > 59) {
      return false;                           //min>59 ! valid
  }
  return true;                                //hour<=23 && min<=59 valid
}

console.log(isValidTime('24:00'));
console.log(isValidTime('23:31'));
console.log(isValidTime('22:00'));
