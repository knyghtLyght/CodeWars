function insertDash(num) {
  let numArray = num.toString().split('');
  let ansArray = [];
  for(let i = 0; i < numArray.length; i++) {
    if(!(numArray[i] % 2 === 0) && !(numArray[i + 1] % 2 === 0)) {
      ansArray.push(numArray[i]);
      if(i < numArray.length - 1) {
        ansArray.push('-');
      }
    } else {
      ansArray.push(numArray[i]);
    }
  }
  return ansArray.join('');
}