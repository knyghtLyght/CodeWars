function insertDash(num) {
  let numArray = num.toString().split('');
  for(let i = 0; i < numArray.length; i++) {
    if(!(numArray[i] % 2 === 0)) {
      if(!(numArray[i + 1] % 2 === 0)) {
        numArray.splice(i + 1, 0,'-');
      }
    }
  }
  return numArray.join('');
}